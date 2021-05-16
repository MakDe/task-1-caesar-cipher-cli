import { Transform } from 'stream'
import { cipherCaesar } from '../../lib/cipher.js'

export default function transformStream(shift, action) {
  return new Transform({
    transform: (data, _, done) => {
      done(null, cipherCaesar(data.toString(), Number(shift), action === 'decode'))
    }
  })
}
