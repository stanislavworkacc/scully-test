//якщо це одна строчка і ми виділяємо якусь частину болд то функція перестає коректно працювати

export function richTextFormatter(data: any): any {
  // console.log('data', data)
  return data.reduce((accum: any, el: any) => {
    if (!el.content) return accum;
    el.content.forEach((item: any) => {
      accum += typeHandler(el, accum, item);
    })
    return accum
  }, '')
}

function typeHandler(el: any, accum: any, item: any): any {
  if(!el.type) return '';

  switch (el.type) {
    case 'heading':
      accum = `<h${el.attrs.level}>${el.content[0].text}</h${el.attrs.level}>`;
      accum = marksHandler(item, accum);
      return accum;
    case 'paragraph':
      accum = `<p>${el.content[0].text}</p>`;
      accum = marksHandler(item, accum);
      return accum
    case 'code_block':
      accum = `${el.content[0].text}`;
      accum = marksHandler(item, accum);
      return accum;
    default:
      accum = `${el.content[0].text}`;
      accum = marksHandler(item, accum);
      return accum;
  }
}

//неправильний акум передаэтсья у функцію
function marksHandler(item: any, accum: any): any {
  if (!item.marks) return accum;

  item.marks.forEach((mark: any) => {
    switch (mark.type) {
      case 'bold':
        accum = accum.replace(item.text, ` <b>${item.text}</b> `);
        break;
        // return accum;
      case 'italic':
        accum = accum.replace(item.text, ` <i>${item.text}</i> `);
        break;
        // return accum;
    }
  });
  return accum;
}
