/** Resolve public folder paths for GitHub Pages subpath deploys */
export function asset(path) {
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${normalized}`
}
