const fs = require('fs');
const path = require('path');

const dirs = ['src/pages', 'src/components'];

const processFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Backgrounds
  content = content.replace(/\bbg-black\b/g, 'bg-white');
  content = content.replace(/\bbg-neutral-900\b/g, 'bg-brand-blue');
  content = content.replace(/\bbg-neutral-950\b/g, 'bg-brand-blue');
  content = content.replace(/\bbg-neutral-[15]0\b/g, 'bg-gray-50');
  content = content.replace(/\bbg-neutral-100\b/g, 'bg-gray-100');
  content = content.replace(/\bbg-neutral-800\b/g, 'bg-blue-900');
  content = content.replace(/\bbg-neutral-700\b/g, 'bg-blue-800');
  
  // Text colors
  content = content.replace(/\btext-black\b/g, 'text-gray-900');
  content = content.replace(/\btext-neutral-900\b/g, 'text-gray-900');
  content = content.replace(/\btext-neutral-800\b/g, 'text-gray-800');
  content = content.replace(/\btext-neutral-500\b/g, 'text-gray-600');
  content = content.replace(/\btext-neutral-400\b/g, 'text-gray-500');
  content = content.replace(/\btext-neutral-300\b/g, 'text-blue-100');
  content = content.replace(/\btext-gray-300\b/g, 'text-blue-100');
  content = content.replace(/\btext-neutral-200\b/g, 'text-blue-100');
  content = content.replace(/\btext-neutral-100\b/g, 'text-white');

  // Borders
  content = content.replace(/\bborder-black\b/g, 'border-brand-blue');
  content = content.replace(/\bborder-neutral-900\b/g, 'border-brand-blue');
  content = content.replace(/\bborder-neutral-200\b/g, 'border-gray-200');
  content = content.replace(/\bborder-neutral-100\b/g, 'border-gray-100');

  // Hover states
  content = content.replace(/\bhover:bg-neutral-800\b/g, 'hover:bg-blue-800');
  content = content.replace(/\bhover:bg-neutral-900\b/g, 'hover:bg-brand-blue');
  content = content.replace(/\bhover:text-neutral-900\b/g, 'hover:text-brand-blue');
  content = content.replace(/\bgroup-hover:text-neutral-900\b/g, 'group-hover:text-brand-blue');
  content = content.replace(/\bgroup-hover:bg-neutral-900\b/g, 'group-hover:bg-brand-blue');

  fs.writeFileSync(filePath, content, 'utf8');
};

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

dirs.forEach(dir => {
  const files = walkSync(dir);
  files.forEach(processFile);
});
console.log('Migration complete.');
