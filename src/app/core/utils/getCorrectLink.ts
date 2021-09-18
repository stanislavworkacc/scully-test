export function getCorrectLink(data: any): any {
  switch (data.linktype) {
    case 'url':
      return ''
    case 'story':
      return ''
  }
}
