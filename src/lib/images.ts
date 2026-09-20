import fs from 'node:fs';
import path from 'node:path';

/**
 * Checks, at build time (server side only), whether an image referenced
 * in public/ actually exists. Lets the page show a clearly labeled
 * placeholder until the final image has been provided, instead of a
 * broken image or a fabricated visual.
 */
export function imageExists(publicPath: string): boolean {
  try {
    const filePath = path.join(process.cwd(), 'public', publicPath);
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}
