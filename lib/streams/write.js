import fs from 'fs'

export default function writeStream(path) {
  if (!path) {
    return process.stdout;
  }
  const stream = fs.createWriteStream(path, { flags: 'a' });

  stream.on('error', (err) => {
    if (err.code === 'ENOENT') {
      console.error('output file not found')
    } else {
      console.error(err)
    }
  });

  return stream
}
