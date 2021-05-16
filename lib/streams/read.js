import fs from 'fs'

export default function readStream(path) {
  if (!path) {
    return process.stdin;
  }

  const stream = fs.createReadStream(path);

  stream.on('error', (err) => {
    if (err.code === 'ENOENT') {
      console.error('input file not found')
    } else {
      console.error(err)
    }
  });

  return stream
}
