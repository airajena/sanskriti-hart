import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');
const assetsDir = path.join(distDir, 'assets');

// Find the main index-*.js file
const files = fs.readdirSync(assetsDir);
const mainJs = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
const mainCss = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

if (mainJs) {
  let indexHtml = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
  
  // Replace the script tag
  indexHtml = indexHtml.replace('/src/start.ts', `/assets/${mainJs}`);
  
  // Inject the CSS tag if it exists
  if (mainCss) {
    indexHtml = indexHtml.replace('</head>', `<link rel="stylesheet" href="/assets/${mainCss}"></head>`);
  }
  
  fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);
  console.log(`Fixed index.html with ${mainJs} and ${mainCss}`);
} else {
  console.error('Could not find main JS file in dist/assets');
  process.exit(1);
}
