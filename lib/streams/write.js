import fs from 'fs'

export default function writeStream(path) {
  if (!path) {
    return process.stdout;
  }
  return fs.createWriteStream(path, { flags: 'a' });
}
