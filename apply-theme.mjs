import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacements = [
  ['bg-dark-900', 'bg-white dark:bg-dark-900'],
  ['bg-dark-800', 'bg-gray-50 dark:bg-dark-800'],
  ['text-white', 'text-gray-900 dark:text-white'],
  ['text-gray-400', 'text-gray-600 dark:text-gray-400'],
  ['text-gray-300', 'text-gray-700 dark:text-gray-300'],
  ['border-white/5', 'border-gray-200 dark:border-white/5'],
  ['border-white/10', 'border-gray-200 dark:border-white/10'],
  ['bg-white/5', 'bg-gray-100 dark:bg-white/5'],
  ['bg-white/10', 'bg-gray-200 dark:bg-white/10'],
  ['hover:bg-white/15', 'hover:bg-gray-300 dark:hover:bg-white/15'],
  ['from-dark-900', 'from-white dark:from-dark-900'],
  ['via-dark-900/60', 'via-white/60 dark:via-dark-900/60'],
  ['via-dark-900/80', 'via-white/80 dark:via-dark-900/80'],
  ['via-dark-900/90', 'via-white/90 dark:via-dark-900/90'],
  ['via-dark-900/40', 'via-white/40 dark:via-dark-900/40'],
  ['to-dark-900/20', 'to-white/20 dark:to-dark-900/20']
];

for (const [search, replace] of replacements) {
    content = content.split(search).join(replace);
}

// Revert text color on specific brand elements that shouldn't change in light mode
const fixes = [
  ['bg-green-600 hover:bg-green-500 text-gray-900 dark:text-white', 'bg-green-600 hover:bg-green-500 text-white'],
  ['bg-brand-500 hover:bg-brand-600 text-gray-900 dark:text-white', 'bg-brand-500 hover:bg-brand-600 text-white'],
  ['bg-brand-500 text-gray-900 dark:text-white', 'bg-brand-500 text-white'],
  ['bg-green-500 text-gray-900 dark:text-white', 'bg-green-500 text-white'],
  ['selection:text-gray-900 dark:text-white', 'selection:text-white dark:selection:text-white'],
  ['<Tv className="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" />', '<Tv className="w-5 h-5 text-white" fill="currentColor" />'],
  ['text-gray-900 dark:text-white px-8', 'text-white px-8'],
  ['text-gray-900 dark:text-white px-4', 'text-white px-4'],
  ['text-gray-900 dark:text-white px-5', 'text-white px-5'],
  ['hover:text-gray-900 dark:text-white transition-colors', 'hover:text-gray-900 dark:hover:text-white transition-colors'],
  ['text-brand-500 font-semibold hover:text-brand-400', 'text-brand-600 dark:text-brand-500 font-semibold hover:text-brand-700 dark:hover:text-brand-400'],
  ['bg-dark-900/10', 'bg-black/10 dark:bg-dark-900/10'], // Correct explicit dark overlay over hero
  ['hover:border-brand-500/30', 'hover:border-brand-500/30 dark:hover:border-brand-500/30'], // Keep brand
  ['bg-dark-800/50', 'bg-gray-50/50 dark:bg-dark-800/50'], // For FAQ items
  ['text-white/80', 'text-gray-800 dark:text-white/80']
];

for (const [search, replace] of fixes) {
    content = content.split(search).join(replace);
}

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx transformed successfully!');
