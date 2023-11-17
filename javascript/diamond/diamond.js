export const rows = (text) => {
  const limit = text.charCodeAt(0) - 65
  let spaces = ' '.repeat(limit)
  const result = [spaces + 'A' + spaces]
  for (let i = 1; i <= limit; i++) {
    spaces = ' '.repeat(limit - i)
    const char = String.fromCharCode(i + 65)
    result.push(spaces + char + ' '.repeat(2 * i - 1) + char + spaces)
  }
  return result.concat(result.slice(0, -1).reverse())
}