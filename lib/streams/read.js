import fs from 'fs'

export default function readStream(path = '') {
  return fs.createReadStream(path);
}
