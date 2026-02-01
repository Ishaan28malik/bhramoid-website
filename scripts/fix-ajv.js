const fs = require('fs');
const path = require('path');

// Fix nested ajv-keywords in fork-ts-checker-webpack-plugin
// Remove formatMinimum and formatMaximum keywords that cause build errors

const schemaUtilsPath = path.join(
  __dirname,
  '../node_modules/fork-ts-checker-webpack-plugin/node_modules/schema-utils/dist/validate.js'
);

if (fs.existsSync(schemaUtilsPath)) {
  let content = fs.readFileSync(schemaUtilsPath, 'utf8');
  
  // Remove formatMinimum and formatMaximum from the ajvKeywords call
  content = content.replace(
    /\(0,\s*_ajvKeywords\.default\)\(ajv,\s*\[['"](instanceof|formatMinimum|formatMaximum|patternRequired)['"](?:,\s*['"](instanceof|formatMinimum|formatMaximum|patternRequired)['"])*\]\)/,
    "(0, _ajvKeywords.default)(ajv, ['instanceof', 'patternRequired']); // Custom keywords (removed formatMinimum/formatMaximum)"
  );
  
  // More specific replacement
  content = content.replace(
    /\(0,\s*_ajvKeywords\.default\)\(ajv,\s*\[['"]instanceof['"],\s*['"]formatMinimum['"],\s*['"]formatMaximum['"],\s*['"]patternRequired['"]\]\)/,
    "(0, _ajvKeywords.default)(ajv, ['instanceof', 'patternRequired']); // Custom keywords (removed formatMinimum/formatMaximum)"
  );
  
  // Even more flexible - find any array with formatMinimum/formatMaximum
  content = content.replace(
    /\[['"]instanceof['"],\s*['"]formatMinimum['"],\s*['"]formatMaximum['"],\s*['"]patternRequired['"]\]/,
    "['instanceof', 'patternRequired']"
  );
  
  fs.writeFileSync(schemaUtilsPath, content, 'utf8');
  console.log('✅ Fixed schema-utils in fork-ts-checker-webpack-plugin');
} else {
  console.log('⚠️  schema-utils not found in fork-ts-checker-webpack-plugin');
}
