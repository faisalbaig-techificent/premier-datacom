/**
 * Add Scroll Animation Scripts to All Pages
 * This script can be run to automatically add scroll animation scripts to HTML pages
 */

const fs = require('fs');
const path = require('path');

// Scripts to add
const scriptsToAdd = `
    <!-- Scroll Animations -->
    <script src="/js/scroll-animations.js"></script>
    <!-- Auto Scroll Animations -->
    <script src="/js/auto-scroll-animations.js"></script>`;

// Function to recursively find HTML files
function findHtmlFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            files.push(...findHtmlFiles(fullPath));
        } else if (item.endsWith('.html')) {
            files.push(fullPath);
        }
    }
    
    return files;
}

// Function to add scripts to HTML file
function addScriptsToFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if scripts are already present
        if (content.includes('scroll-animations.js')) {
            console.log(`Scripts already present in: ${filePath}`);
            return;
        }
        
        // Find the closing body tag
        const bodyTagIndex = content.lastIndexOf('</body>');
        if (bodyTagIndex === -1) {
            console.log(`No closing body tag found in: ${filePath}`);
            return;
        }
        
        // Insert scripts before closing body tag
        const newContent = content.slice(0, bodyTagIndex) + scriptsToAdd + '\n  ' + content.slice(bodyTagIndex);
        
        // Write back to file
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Added scroll animation scripts to: ${filePath}`);
        
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

// Main execution
function main() {
    const rootDir = process.cwd();
    const htmlFiles = findHtmlFiles(rootDir);
    
    console.log(`Found ${htmlFiles.length} HTML files`);
    
    for (const file of htmlFiles) {
        addScriptsToFile(file);
    }
    
    console.log('Script addition complete!');
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = { addScriptsToFile, findHtmlFiles }; 