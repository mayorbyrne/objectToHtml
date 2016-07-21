window.O2H = {
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
            return '<li> {' + self.getHtmlFromObject(item) + '}';
          }
          else {
            return '<li>null';
          }
        }
        else {
          return '<li>' + item;
        }
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
                text += '<li><strong>' + k + '</strong>' + ': []';
              }
              else {
                text += '<li><strong>' + k + '</strong>: [' + self.getHtmlFromArray(obj[k]) + ']';
              }
            }
            else if (Object.keys(obj[k]).length === 0) {
              text += '<li><strong>' + k + '</strong>' + ': {}';
            }
            else {
              text += '<li><strong>' + k + '</strong>: {' + self.getHtmlFromObject(obj[k])
                + '}';
            }
          }
          else {
            text += '<li><strong>' + k + '</strong>: null';
          }
          break;
        case 'undefined':
          text += '<li><strong>' + k + '</strong>: undefined';
          break;
        default:
          text += '<li><strong>' + k +'</strong>: ' + obj[k] + '<br>'
          break;
      };
    });

    text += '</ul>'
    return text;
  }
}
