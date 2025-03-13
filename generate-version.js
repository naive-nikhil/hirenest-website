import fs from 'fs';
import path from 'path';

const version = new Date().getTime().toString();
const content = `export const BUILD_VERSION = '${version}';`;

fs.writeFileSync(
  path.join(process.cwd(), 'src/utils/version.js'),
  content
); 