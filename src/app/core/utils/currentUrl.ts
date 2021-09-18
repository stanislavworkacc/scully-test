export function currentUrl(url: string) {
  const indexOfEnd = url.indexOf('?') !== -1 ? url.indexOf('?'): url.length;
  return url.slice(1, indexOfEnd);
}
