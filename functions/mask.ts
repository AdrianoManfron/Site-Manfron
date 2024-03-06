export function phoneMask( phone: string ) {
  return phone
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1 $2')
    .replace(/(\d{0})(\d)/, '$1($2')
    .replace(/(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{4})(\d{1,4})$/, '$1-$2')
}