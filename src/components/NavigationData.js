// import fs from 'fs/promises';
// import path from 'path';

// const DATA_ROOT = path.join(process.cwd(), 'src', 'globals', 'page-data');

// // ... existing imports

// export async function getMenuItems() {
//   const categories = ['products', 'solutions'];
//   const menu = { products: { groups: [], itemsByGroup: {} }, solutions: [] }; // adjusted shape

//   // For products only (add similar logic for solutions later)
//   const productsDir = path.join(DATA_ROOT, 'products');
//   let files = [];
//   try {
//     files = await fs.readdir(productsDir);
//   } catch (err) {
//     console.error('Products dir error:', err);
//   }

//   const items = [];
//   for (const file of files) {
//     if (!file.endsWith('.json')) continue;
//     const slug = file.replace('.json', '');
//     const filePath = path.join(productsDir, file);
//     try {
//       const content = await fs.readFile(filePath, 'utf8');
//       const data = JSON.parse(content);
//       items.push({
//         slug,
//         title: data.title,
//         subtitle: data.subtitle || '',
//         href: `/products/${slug}`,
//         group: data.group || 'Ungrouped' // fallback
//       });
//     } catch (err) {
//       console.error(`Parse error ${file}:`, err);
//     }
//   }

//   // Group items
//   const itemsByGroup = {};
//   const uniqueGroups = new Set();

//   items.forEach(item => {
//     const g = item.group;
//     uniqueGroups.add(g);
//     if (!itemsByGroup[g]) itemsByGroup[g] = [];
//     itemsByGroup[g].push(item);
//   });

//   menu.products = {
//     groups: Array.from(uniqueGroups).sort(),
//     itemsByGroup
//   };

//   // For solutions - keep simple or add grouping later
//   // ...

//   console.log('Menu data prepared:', menu);
//   return menu;
// }

// e.g. lib/menu.js or wherever getMenuItems lives
import fs from 'fs/promises';
import path from 'path';

const DATA_ROOT = path.join(process.cwd(), 'src', 'globals', 'page-data');

function slugify(str) {
  return (str || 'other')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export async function getMenuItems() {
  const menu = {
    products: {
      leftItems: [],     // teasers / links for left column
      products: [],      // normal product cards for right side
    },
    solutions: {
      groups: [],
      itemsByGroup: {},
    },
  };

  // ── 1. Left column items ─────────────────────────────────────────────
  const leftDir = path.join(DATA_ROOT,'products', 'left-items');
  try {
    const files = await fs.readdir(leftDir);
    for (const file of files) {
      if (!file.endsWith('.json')) continue;

      const fullPath = path.join(leftDir, file);
      const data = JSON.parse(await fs.readFile(fullPath, 'utf-8'));

      menu.products.leftItems.push({
        title: data.title || 'Untitled',
        subtitle: data.subtitle || '',
        href: `/products/${data.slug || file.replace(/\.json$/, '')}`,
        slug: data.slug || file.replace(/\.json$/, ''),
      });
    }

    // Sort left items alphabetically by title
    menu.products.leftItems.sort((a, b) => a.title.localeCompare(b.title));
  } catch (err) {
    console.warn('left-items folder missing or error:', err.message);
  }

  // ── 2. Right side – normal products ──────────────────────────────────
  const productsDir = path.join(DATA_ROOT, 'products');
  try {
    const files = await fs.readdir(productsDir);
    for (const file of files) {
      if (!file.endsWith('.json')) continue;

      const fullPath = path.join(productsDir, file);
      const data = JSON.parse(await fs.readFile(fullPath, 'utf-8'));

      menu.products.products.push({
        title: data.title || 'Untitled',
        subtitle: data.subtitle || '',
        href: `/products/${data.slug || file.replace(/\.json$/, '')}`,
      });
    }

    // Sort products alphabetically by title
    menu.products.products.sort((a, b) => a.title.localeCompare(b.title));
  } catch (err) {
    console.warn('products folder error:', err.message);
  }

  // ── 3. Solutions – grouped ───────────────────────────────────────────
  const solutionsDir = path.join(DATA_ROOT, 'solutions');
  try {
    const files = await fs.readdir(solutionsDir);
    const solItems = [];

    for (const file of files) {
      if (!file.endsWith('.json')) continue;

      const fullPath = path.join(solutionsDir, file);
      const data = JSON.parse(await fs.readFile(fullPath, 'utf-8'));

      const group = data.group || 'Other';

      solItems.push({
        slug: file.replace(/\.json$/, ''),
        title: data.title || 'Untitled',
        subtitle: data.subtitle || '',
        href: `/solutions/${slugify(group)}/${file.replace(/\.json$/, '')}`,
        group,
      });
    }

    const solByGroup = {};
    const solGroups = new Set();

    solItems.forEach((item) => {
      const g = item.group;
      solGroups.add(g);
      if (!solByGroup[g]) solByGroup[g] = [];
      solByGroup[g].push(item);
    });

    menu.solutions = {
      groups: Array.from(solGroups).sort(),
      itemsByGroup: solByGroup,
    };
  } catch (err) {
    console.warn('solutions folder error:', err.message);
  }

  return menu;
}