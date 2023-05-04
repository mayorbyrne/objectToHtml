export default class O2H {
  #listItem = '<li>';

  constructor() {

  }

  strong(text: string): string {
    return '<strong>' + text + '</strong>';
  }

  getHtmlFromArray(arr: Array<any>): string {
    let text = '<ul>';

    if (!arr.length) {
      text += '[]';
    }
    else {
      text += arr.map((item) => {
        if (typeof item === 'object') {
          if (Array.isArray(item)) {
            return this.getHtmlFromArray(item);
          }
          else if (item) {
            return this.#listItem + '{' + this.getHtmlFromObject(item) + '}';
          }
          else {
            return this.#listItem + '<i>null</i>';
          }
        }
        return this.#listItem + item;
      }).join('');
    }
    text += '</ul>';
    return text;
  }

  getHtmlFromObject(obj: { [k: string]: any }, title?: string) {
    var text = '';
    if (title) {
      text += '<strong>' + title + '</strong><br/>';
    }
    text += '<ul>';
    obj = obj || {};

    Object.keys(obj).forEach((k) => {
      switch (typeof obj[k]) {
        case 'object':
          if (obj[k]) {
            if (Array.isArray(obj[k])) {
              if (!obj[k].length) {
                text += this.#listItem + this.strong(k) + ': []';
              }
              else {
                text += this.#listItem + this.strong(k) + ': [' + this.getHtmlFromArray(obj[k]) + ']';
              }
            }
            else if (Object.keys(obj[k]).length === 0) {
              text += this.#listItem + this.strong(k) + ': {}';
            }
            else {
              text += this.#listItem + this.strong(k) + ': {' + this.getHtmlFromObject(obj[k])
                + '}';
            }
          }
          else {
            text += this.#listItem + this.strong(k) + ': null';
          }
          break;
        case 'undefined':
          text += this.#listItem + this.strong(k) + ': undefined';
          break;
        default:
          text += this.#listItem + this.strong(k) + ': ' + obj[k] + '<br/>'
          break;
      };
    });

    text += '</ul>'
    return text;
  }
}