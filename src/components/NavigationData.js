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
    products: { groups: [], itemsByGroup: {} },
    solutions: { groups: [], itemsByGroup: {} }
  };

  // ── Products ───────────────────────────────────────
  const productsDir = path.join(DATA_ROOT, 'products');
  let files = [];
  try {
    files = await fs.readdir(productsDir);
  } catch (err) {
    console.error('Products dir error:', err);
  }

  const prodItems = [];
  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    const slug = file.replace('.json', '');
    const filePath = path.join(productsDir, file);
    try {
      const data = JSON.parse(await fs.readFile(filePath, 'utf8'));
      const group = data.group || 'Other';
      prodItems.push({
        slug,
        title: data.title,
        subtitle: data.subtitle || '',
        href: `/products/${slugify(group)}/${slug}`,   // nice hierarchical URL
        group
      });
    } catch (err) {
      console.error(`Parse error products/${file}:`, err);
    }
  }

  const prodByGroup = {};
  const prodGroups = new Set();
  prodItems.forEach(item => {
    const g = item.group;
    prodGroups.add(g);
    if (!prodByGroup[g]) prodByGroup[g] = [];
    prodByGroup[g].push(item);
  });

  menu.products = {
    groups: Array.from(prodGroups).sort(),
    itemsByGroup: prodByGroup
  };

  // ── Solutions ───────────────────────────────────────
  const solutionsDir = path.join(DATA_ROOT, 'solutions');
  files = [];
  try {
    files = await fs.readdir(solutionsDir);
  } catch (err) {
    console.error('Solutions dir error:', err);
  }

  const solItems = [];
  for (const file of files) {
    if (!file.endsWith('.json')) continue;
    const slug = file.replace('.json', '');
    const filePath = path.join(solutionsDir, file);
    try {
      const data = JSON.parse(await fs.readFile(filePath, 'utf8'));
      const group = data.group || 'Other';
      solItems.push({
        slug,
        title: data.title,
        subtitle: data.subtitle || '',
        href: `/solutions/${slugify(group)}/${slug}`,   // nice hierarchical URL
        group
      });
    } catch (err) {
      console.error(`Parse error solutions/${file}:`, err);
    }
  }

  const solByGroup = {};
  const solGroups = new Set();
  solItems.forEach(item => {
    const g = item.group;
    solGroups.add(g);
    if (!solByGroup[g]) solByGroup[g] = [];
    solByGroup[g].push(item);
  });

  menu.solutions = {
    groups: Array.from(solGroups).sort(),
    itemsByGroup: solByGroup
  };

  return menu;
}