import { notFound } from 'next/navigation'; // FIX: Prevents "notFound is not defined" error
import fs from 'fs/promises';
import path from 'path';
import * as Layouts from '@/globals/layouts';
import PageContent from '@/components/PageContent';

const DATA_DIR = path.join(process.cwd(), 'src', 'globals', 'page-data');

function slugify(str) {
  return (str || 'other').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

// export default async function DynamicProductPage({ params }) {
//   // NEXT.JS 15/16 REQUIREMENT: Await the params promise
//   // This fixes: "Cannot read properties of undefined (reading 'length')"
//   const resolvedParams = await params; 
//   const slug = resolvedParams?.slug;

//   if (!slug || !Array.isArray(slug)) {
//     return notFound();
//   }

//   const actualFileSlug = slug[slug.length - 1];
//   const filePath = path.join(DATA_DIR, 'products', `${actualFileSlug}.json`);
  
//   let data;
//   try {
//     const file = await fs.readFile(filePath, 'utf8');
//     data = JSON.parse(file);
//   } catch (err) {
//     return notFound();
//   }

//   const LayoutComponent = Layouts[data.layout];
//   if (!LayoutComponent) {
//     return <div>Layout not found.</div>;
//   }

//   return (
//     <LayoutComponent
//       title={data.title}
//       subtitle={data.subtitle}
//       heroImage={data.heroImage}
//     >
//       <PageContent sections={data.sections || []} />
//     </LayoutComponent>
//   );
// }

// const DATA_DIR = path.join(process.cwd(), 'src/globals/page-data');

export default async function DynamicProductPage({ params }) {
  const { slug } = await params;
  if (!slug?.length) return notFound();

  const fileSlug = slug.at(-1); // last segment
  const filePath = path.join(DATA_DIR, 'products', `${fileSlug}.json`);

  let pageData;
 try {
  pageData = JSON.parse(await fs.readFile(filePath, 'utf8'));
} catch {
  const filePath = path.join(DATA_DIR, 'products', 'left-items', `${fileSlug}.json`);
  try {
    pageData = JSON.parse(await fs.readFile(filePath, 'utf8'));
  } catch {
    return notFound();
  }
}

  const Layout = Layouts[pageData.layout];
  if (!Layout) {
    console.warn(`Layout ${pageData.layout} not found`);
    return notFound();
  }

  return <Layout {...pageData} />;
}
export async function generateStaticParams() {
  const dir = path.join(DATA_DIR, 'products');
  try {
    const files = await fs.readdir(dir);
    const paths = [];
    for (const file of files) {
      if (!file.endsWith('.json')) continue;
      const data = JSON.parse(await fs.readFile(path.join(dir, file), 'utf8'));
      paths.push({
        slug: [slugify(data.group), file.replace('.json', '')]
      });
    }
    return paths;
  } catch { return []; }
}