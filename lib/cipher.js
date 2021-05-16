export const cipherCaesar = (str, shift, decode = false) => {
  const s = decode ? (26 - shift) % 26 : shift
  const n = s > 0 ? s : 26 + (s % 26)

  const result = [...str].map((l, i) => {
    const code = str.charCodeAt(i)

    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + n) % 26) + 65)
    }

    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + n) % 26) + 97)
    }

    return l
  })

  return result.join('')
}
