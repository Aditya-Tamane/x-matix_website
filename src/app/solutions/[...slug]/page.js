import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import * as Layouts from '@/globals/layouts';

const DATA_DIR = path.join(process.cwd(), 'src', 'globals', 'page-data');

function slugify(str) {
  return (str || 'other')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export default async function DynamicSolutionPage({ params }) {
  const { slug } = await params;

  if (!slug || !Array.isArray(slug) || slug.length === 0) {
    return notFound();
  }

  const fileSlug = slug.at(-1); // last segment = filename without .json
  const filePath = path.join(DATA_DIR, 'solutions', `${fileSlug}.json`);

  let pageData;
  try {
    pageData = JSON.parse(await fs.readFile(filePath, 'utf8'));
  } catch (err) {
    console.error(`Failed to load solution JSON: ${filePath}`, err);
    return notFound();
  }

  const Layout = Layouts[pageData.layout];
  if (!Layout) {
    console.warn(`Layout not found: ${pageData.layout}`);
    return notFound();
  }

  // Most straightforward fix
  return <Layout {...pageData} />;
}

export async function generateStaticParams() {
  const dir = path.join(DATA_DIR, 'solutions');
  try {
    const files = await fs.readdir(dir);
    const paths = [];
    for (const file of files) {
      if (!file.endsWith('.json')) continue;
      const raw = await fs.readFile(path.join(dir, file), 'utf8');
      const data = JSON.parse(raw);
      paths.push({
        slug: [slugify(data.group), file.replace(/\.json$/, '')]
      });
    }
    return paths;
  } catch (err) {
    console.error('generateStaticParams failed for solutions', err);
    return [];
  }
}