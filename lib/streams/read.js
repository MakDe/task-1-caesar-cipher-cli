import fs from 'fs'

export default function readStream(path) {
  if (!path) {
    return process.stdin;
  }

  const stream = fs.createReadStream(path);

  return stream
}
