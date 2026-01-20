#!/usr/bin/env node

/**
 * KL Latifix Deployment Verification Script
 * Run this before deploying to Netlify
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 KL Latifix Deployment Verification\n');

// Check required files
const requiredFiles = [
  'package.json',
  'netlify.toml',
  'src/App.jsx',
  'src/index.jsx',
  'public/index.html',
  'public/logo.jpeg'
];

console.log('📁 Checking required files...');
let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

// Check package.json scripts
console.log('\n📦 Checking package.json scripts...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const requiredScripts = ['start', 'build', 'test'];
requiredScripts.forEach(script => {
  if (packageJson.scripts && packageJson.scripts[script]) {
    console.log(`✅ ${script}: ${packageJson.scripts[script]}`);
  } else {
    console.log(`❌ ${script} script missing`);
    allFilesExist = false;
  }
});

// Check dependencies
console.log('\n📚 Key dependencies...');
const keyDeps = ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'gsap'];
keyDeps.forEach(dep => {
  if (packageJson.dependencies && packageJson.dependencies[dep]) {
    console.log(`✅ ${dep}: ${packageJson.dependencies[dep]}`);
  } else {
    console.log(`❌ ${dep} missing`);
  }
});

// Check netlify.toml
console.log('\n🌐 Checking Netlify configuration...');
if (fs.existsSync('netlify.toml')) {
  const netlifyConfig = fs.readFileSync('netlify.toml', 'utf8');
  if (netlifyConfig.includes('publish = "build"')) {
    console.log('✅ Build directory configured');
  }
  if (netlifyConfig.includes('command = "npm run build"')) {
    console.log('✅ Build command configured');
  }
  if (netlifyConfig.includes('from = "/*"')) {
    console.log('✅ SPA redirects configured');
  }
} else {
  console.log('❌ netlify.toml missing');
  allFilesExist = false;
}

// Final status
console.log('\n' + '='.repeat(50));
if (allFilesExist) {
  console.log('🎉 READY FOR DEPLOYMENT!');
  console.log('\nNext steps:');
  console.log('1. Push to GitHub repository: sidemen7z/KL-Latifix');
  console.log('2. Connect repository to Netlify');
  console.log('3. Deploy automatically with detected settings');
  console.log('\n📖 See DEPLOYMENT.md for detailed instructions');
} else {
  console.log('⚠️  DEPLOYMENT NOT READY - Fix missing files first');
}
console.log('='.repeat(50));