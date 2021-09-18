export function deleteLastSlash(slug: string): string {
  return slug[slug.length - 1] === '/' ? slug.slice(0, slug.length - 1) : slug;
}
