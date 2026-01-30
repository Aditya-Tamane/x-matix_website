import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import * as Layouts from '@/globals/layouts';
import PageContent from '@/components/PageContent';

const DATA_DIR = path.join(process.cwd(), 'src', 'globals', 'page-data');

function slugify(str) {
  return (str || 'other').toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default async function DynamicSolutionPage({ params }) {
  const { slug } = await params; // FIX: Await params

  if (!slug || !Array.isArray(slug)) return notFound();

  const actualFileSlug = slug[slug.length - 1];
  const filePath = path.join(DATA_DIR, 'solutions', `${actualFileSlug}.json`);
  
  let data;
  try {
    const file = await fs.readFile(filePath, 'utf8');
    data = JSON.parse(file);
  } catch {
    return notFound();
  }

  const LayoutComponent = Layouts[data.layout];
  if (!LayoutComponent) return <div>Layout not found</div>;

  return (
    <LayoutComponent title={data.title} subtitle={data.subtitle} heroImage={data.heroImage}>
      <PageContent sections={data.sections || []} />
    </LayoutComponent>
  );
}

export async function generateStaticParams() {
  const dir = path.join(DATA_DIR, 'solutions');
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