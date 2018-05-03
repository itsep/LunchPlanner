const validCharactersRegex = /[a-z0-9]|-/

export function isValidSubdomainChar(char) {
  return validCharactersRegex.test(char)
}

const validSubdomainRegex = /^[a-z0-9]([a-z0-9]|-[a-z0-9])*$/

export function isValidSubdomain(text) {
  return validSubdomainRegex.test(text)
}

const charMapping = {
  ' ': '-',
}

export function escapeSubdomain(text) {
  if (!text) {
    return ''
  }
  return text.trim().toLowerCase().split('').map((char) => {
    if (isValidSubdomainChar(char)) {
      return char
    }
    // map the char to a valid subdomain char or remove it
    return charMapping[char] || ''
  })
    .join('')
}

