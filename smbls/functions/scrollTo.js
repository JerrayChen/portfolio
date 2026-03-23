export const scrollTo = function scrollTo(sectionId) {
  const el = document.getElementById(sectionId)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
