export function typeGetterComponent(type: any, data: any): any {
  switch (type) {
    case 'icon':
      return data.icon.find((el: any) => el.component === 'icon');
    //for text component
    case 'offer_tag':
    case 'main_text':
    case 'subheading':
      return data[type].find((el: any) => el.component === 'text');
  }
}
