import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Technology pages to migrate
const technologiesToMigrate = [
  'react-native-development',
  'python-development-services',
  'nodejs-development-services',
  'next-js-ssr-development-services',
  'javascript-development',
  'microsoft-dotnet-8-development',
  'flutter-development-services',
  'figma-design-services',
  'angular-development-services'
];

function migrateTechnologyPage(slug) {
  const sourcePath = path.join(__dirname, `../pages_1/technology/${slug}/index.js`);
  const targetPath = path.join(__dirname, `../app/technology/${slug}/page.js`);
  
  try {
    // Check if source file exists
    if (!fs.existsSync(sourcePath)) {
      console.log(`❌ Source file not found: ${sourcePath}`);
      return;
    }

    // Create target directory if it doesn't exist
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Read source file
    const sourceContent = fs.readFileSync(sourcePath, 'utf8');
    
    // Extract data file name from import
    const dataFileMatch = sourceContent.match(/import\s+\w+Data\s+from\s+"@\/data\/technology-detail-config\/(\w+)\.data"/);
    if (!dataFileMatch) {
      console.log(`❌ Could not extract data file for ${slug}`);
      return;
    }
    
    const dataFileName = dataFileMatch[1];
    const dataFileVarName = dataFileName.charAt(0).toUpperCase() + dataFileName.slice(1) + 'Data';
    
    // Create new app router page
    const newContent = `import ${dataFileVarName} from "@/data/technology-detail-config/${dataFileName}.data";
import TechnologyDetails from "@/features/technologyPage/technologyDetail/TechnologyDetails";
import { BASE_URL } from "@/lib/utils/baseUrl";

// Force SSR for technology page
export const dynamic = 'force-dynamic';

export const metadata = {
  title: "${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Services | Moltech Solutions Inc.",
  description: "Expert ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} development services. Build scalable, high-performance solutions with our experienced team.",
  keywords: [
    "${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} development services",
    "${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} experts USA",
    "${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} consulting",
    "${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} development company"
  ],
  authors: [{ name: 'Moltech Solutions Inc.' }],
  creator: 'Moltech Solutions Inc.',
  publisher: 'Moltech Solutions Inc.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Services | Moltech Solutions Inc.",
    description: "Expert ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} development services. Build scalable, high-performance solutions with our experienced team.",
    url: \`\${BASE_URL}/technology/${slug}/\`,
    siteName: "Moltech Solutions Inc.",
    images: [
      {
        url: \`\${BASE_URL}/images/meta/${slug}Icon.webp\`,
        width: 1200,
        height: 630,
        alt: "${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Services - Moltech Solutions Inc.",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Services | Moltech Solutions Inc.",
    description: "Expert ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} development services. Build scalable, high-performance solutions with our experienced team.",
    images: [\`\${BASE_URL}/images/meta/${slug}Icon.webp\`],
    creator: "@MoltechSolutions",
    site: "@MoltechSolutions",
  },
  alternates: {
    canonical: \`\${BASE_URL}/technology/${slug}/\`,
  },
};

export default function ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page() {
  return <TechnologyDetails data={${dataFileVarName}} />;
}`;

    // Write new file
    fs.writeFileSync(targetPath, newContent);
    console.log(`✅ Migrated: ${slug}`);
    
  } catch (error) {
    console.error(`❌ Failed to migrate ${slug}:`, error.message);
  }
}

function runMigration() {
  console.log('🚀 Starting technology pages migration...');
  
  for (const slug of technologiesToMigrate) {
    migrateTechnologyPage(slug);
  }
  
  console.log('✅ Migration completed!');
}

runMigration();
