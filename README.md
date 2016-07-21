ObjectToHtml
======

Take a javascript object and convert it to a basic HTML tree (unordered-list)

```js
var obj = {
  hello: 'world',
  line: 15,
  config: {
    a: 'this is a',
    b: 'this is b',
    c: {
      hello: 'again'
    },
    d: [
      null,
      false,
      {
        hi: 'friend',
        whatcha: 'doin',
        now: 9
      }
    ]
  }
};
```


var html = objectToHtml(obj);

```html
<ul><li><strong>hello</strong>: world<br><li><strong>line</strong>: 15<br><li><strong>config</strong>: {<ul><li><strong>a</strong>: this is a<br><li><strong>b</strong>: this is b<br><li><strong>c</strong>: {<ul><li><strong>hello</strong>: again<br></ul>}<li><strong>d</strong>: [<ul><li>null<li>false<li> {<ul><li><strong>hi</strong>: friend<br><li><strong>whatcha</strong>: doin<br><li><strong>now</strong>: 9<br></ul>}</ul>]</ul>}</ul>
```

<ul><li><strong>hello</strong>: world<br><li><strong>line</strong>: 15<br><li><strong>config</strong>: {<ul><li><strong>a</strong>: this is a<br><li><strong>b</strong>: this is b<br><li><strong>c</strong>: {<ul><li><strong>hello</strong>: again<br></ul>}<li><strong>d</strong>: [<ul><li>null<li>false<li> {<ul><li><strong>hi</strong>: friend<br><li><strong>whatcha</strong>: doin<br><li><strong>now</strong>: 9<br></ul>}</ul>]</ul>}</ul>
