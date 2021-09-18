export function modifyUrlReq(url: string) {
  const result = url.split('/').length !== 1 ? `${url}/`: `${url}`;
  return result
}
