import fs from 'fs'

export default function writeStream(path) {
  return fs.createWriteStream(path);
}
