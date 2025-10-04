const fs = require('fs');
const path = require('path');

const files = [
  'app/services/mass-hiring/page.tsx',
  'app/services/organizational-psychology/page.tsx',
  'app/services/learning-development/page.tsx',
  'app/services/contract-staffing/page.tsx',
  'app/services/executive-talent-acquisition/page.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update hero section padding
    content = content.replace(/pt-32 pb-20/g, 'pt-24 pb-16 lg:pt-32 lg:pb-20');
    
    // Update icon container size
    content = content.replace(/w-16 h-16 bg-gradient-to-br from-\[#003728\] to-\[#002A1F\] rounded-2xl shadow-lg/g, 'w-10 h-10 bg-gradient-to-br from-[#003728] to-[#002A1F] rounded-lg shadow-lg');
    
    // Update icon size
    content = content.replace(/h-8 w-8 text-white/g, 'h-5 w-5 text-white');
    
    // Update icon container margin
    content = content.replace(/mb-6/g, 'mb-4');
    
    // Update heading size
    content = content.replace(/text-3xl md:text-5xl font-bold font-serif text-\[#003728\] mb-6/g, 'text-3xl md:text-5xl font-bold font-serif text-[#003728] mb-5');
    
    // Update paragraph text size
    content = content.replace(/text-xl text-\[#003728\]\/80 mb-8/g, 'text-lg text-[#003728]/80 mb-7');
    
    // Update button padding
    content = content.replace(/px-8 py-4 font-semibold/g, 'px-6 py-3 font-semibold text-base');
    
    // Update stats text size
    content = content.replace(/text-3xl font-bold text-\[#003728\]/g, 'text-2xl font-bold text-[#003728]');
    content = content.replace(/text-sm text-\[#003728\]\/70/g, 'text-xs text-[#003728]/70');
    
    // Update stats grid gap
    content = content.replace(/gap-6/g, 'gap-4');
    
    // Update section padding
    content = content.replace(/py-24/g, 'py-20');
    
    // Update h2 heading sizes
    content = content.replace(/text-3xl md:text-4xl font-bold text-\[#003728\] mb-6/g, 'text-2xl md:text-3xl font-bold text-[#003728] mb-5');
    content = content.replace(/text-3xl md:text-4xl font-bold text-white mb-6/g, 'text-2xl md:text-3xl font-bold text-white mb-5');
    
    // Update paragraph text in sections
    content = content.replace(/text-xl text-\[#003728\]\/80 max-w-3xl mx-auto/g, 'text-lg text-[#003728]/80 max-w-2xl mx-auto');
    
    // Update service card padding
    content = content.replace(/p-8 shadow-lg hover:shadow-2xl/g, 'p-6 shadow-lg hover:shadow-xl');
    
    // Update service card icon container
    content = content.replace(/w-16 h-16.*rounded-2xl mb-6/g, 'w-12 h-12 bg-gradient-to-br from-[#003728]/10 to-emerald-400/10 rounded-xl mb-4');
    
    // Update service card heading
    content = content.replace(/text-2xl font-bold text-\[#003728\] mb-4/g, 'text-xl font-bold text-[#003728] mb-3');
    
    // Update service card description
    content = content.replace(/text-\[#003728\]\/70 mb-6/g, 'text-[#003728]/70 mb-4');
    
    // Update CTA section padding
    content = content.replace(/py-24 bg-gradient-to-br from-\[#003728\] to-\[#002A1F\]/g, 'py-20 bg-gradient-to-br from-[#003728] to-[#002A1F]');
    
    fs.writeFileSync(filePath, content);
    console.log(`Standardized ${file}`);
  }
});

console.log('All files standardized to match Background Verification page!');
