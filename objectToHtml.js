window.O2H = {
  listItem: '<li>',
  strong: function strong (text) {
    return '<strong>' + text + '</strong>';
  },
  getHtmlFromArray: function getHtmlFromArray (arr) {
    var self = this;

    var text = '<ul>';
    if (!arr.length) {
      text += '[]';
    }
    else {
      text += arr.map(function(item) {
        if (typeof item === 'object') {
          if (Array.isArray(item)) {
            return self.getHtmlFromArray(item);
          }
          else if (item) {
            return self.listItem + '{' + self.getHtmlFromObject(item) + '}';
          }
          else {
            return self.listItem + 'null';
          }
        }
        return self.listItem + item;
      }).join('');
    }
    text += '</ul>';
    return text;
  },

  getHtmlFromObject: function getHtmlFromObject (obj, title) {
    var self = this;

    var text = '';
    if (title) {
      text += '<strong>' + title + '</strong><br>';
    }
    text += '<ul>';
    obj = obj || {};

    Object.keys(obj).forEach(function(k) {
      switch (typeof obj[k]) {
        case 'object':
          if (obj[k]) {
            if (Array.isArray(obj[k])) {
              if (!obj[k].length) {
                text += self.listItem + self.strong(k) + ': []';
              }
              else {
                text += self.listItem + self.strong(k) + ': [' + self.getHtmlFromArray(obj[k]) + ']';
              }
            }
            else if (Object.keys(obj[k]).length === 0) {
              text += self.listItem + self.strong(k) + ': {}';
            }
            else {
              text += self.listItem + self.strong(k) + ': {' + self.getHtmlFromObject(obj[k])
                + '}';
            }
          }
          else {
            text += self.listItem + self.strong(k) + ': null';
          }
          break;
        case 'undefined':
          text += self.listItem + self.strong(k) + ': undefined';
          break;
        default:
          text += self.listItem + self.strong(k) + ': ' + obj[k] + '<br>'
          break;
      };
    });

    text += '</ul>'
    return text;
  }
}
