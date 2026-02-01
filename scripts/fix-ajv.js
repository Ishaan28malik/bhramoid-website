const fs = require('fs');
const path = require('path');

// Fix ajv-keywords to ignore formatMinimum and formatMaximum
const ajvKeywordsPath = path.join(__dirname, '../node_modules/ajv-keywords/dist/index.js');

if (fs.existsSync(ajvKeywordsPath)) {
  let content = fs.readFileSync(ajvKeywordsPath, 'utf8');
  
  // Patch the get function to ignore formatMinimum and formatMaximum
  if (!content.includes('formatMinimum') || !content.includes('formatMaximum')) {
    content = content.replace(
      /function get\(keyword\) \{[^}]*throw new Error\("Unknown keyword " \+ keyword\);[^}]*\}/s,
      `function get(keyword) {
    const defFunc = keywords_1.default[keyword];
    if (!defFunc) {
        // Ignore unknown keywords like formatMinimum/formatMaximum
        if (keyword === 'formatMinimum' || keyword === 'formatMaximum') {
            return function() { return; }; // Return no-op function
        }
        throw new Error("Unknown keyword " + keyword);
    }
    return defFunc;
}`
    );
    
    fs.writeFileSync(ajvKeywordsPath, content, 'utf8');
    console.log('✅ Patched ajv-keywords to ignore formatMinimum/formatMaximum');
  } else {
    console.log('✅ ajv-keywords already patched');
  }
} else {
  console.log('⚠️  ajv-keywords not found');
}

// Also fix schema-utils in fork-ts-checker-webpack-plugin
const schemaUtilsPath = path.join(
  __dirname,
  '../node_modules/fork-ts-checker-webpack-plugin/node_modules/schema-utils/dist/validate.js'
);

if (fs.existsSync(schemaUtilsPath)) {
  let content = fs.readFileSync(schemaUtilsPath, 'utf8');
  
  // Remove formatMinimum and formatMaximum from the ajvKeywords call
  content = content.replace(
    /\['instanceof',\s*'formatMinimum',\s*'formatMaximum',\s*'patternRequired'\]/g,
    "['instanceof', 'patternRequired']"
  );
  
  // Clean up duplicate comments
  const commentRegex = /\/\/ Custom keywords \(removed formatMinimum\/formatMaximum\)/g;
  const matches = content.match(commentRegex);
  if (matches && matches.length > 1) {
    content = content.replace(commentRegex, '');
    content = content.replace(
      /\(0,\s*_ajvKeywords\.default\)\(ajv,\s*\[[^\]]+\]\)/,
      "(0, _ajvKeywords.default)(ajv, ['instanceof', 'patternRequired']); // Custom keywords (removed formatMinimum/formatMaximum)"
    );
  }
  
  fs.writeFileSync(schemaUtilsPath, content, 'utf8');
  console.log('✅ Fixed schema-utils in fork-ts-checker-webpack-plugin');
} else {
  console.log('⚠️  schema-utils not found in fork-ts-checker-webpack-plugin');
}
