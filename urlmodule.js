import url from 'node:url';

const myURL = new URL('https://example.org:8000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh'; 
  //console.log(myURL)
  //console.log(myURL.href)
//   console.log(myURL.host)
//   myURL.host = "example.com:8080"
//   console.log(myURL.host)
//   console.log(myURL.href)

  const myURL2 = new URL('https://abc:xyz@example.com');
console.log(myURL2.password);
console.log(myURL2.hostname)
myURL2.password = "123"
console.log(myURL2.password)
