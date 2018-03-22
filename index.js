/**
 * Created by danieldihardja on 22/03/18.
 */
const cv = require('./cv.json');
const ejs = require('ejs');
const fs = require('fs');

function readTemplate() {
  return new Promise((resolve, reject) => {
    fs.readFile('./template/cv.ejs', 'utf-8', (err, res)=> {
      resolve(res);
    });
  });
}

function writeTemplate(html) {
  return new Promise((resolve, reject)=> {
    fs.writeFile("./public/index.html", html, 'utf8', (err, res) => {
      resolve();
    });
  });
}

readTemplate()
  .then((tpl)=> {
    const html = ejs.render(tpl, cv);
    return writeTemplate(html);
  })
  .then(()=> {
    console.log('cv generated');
  })
  .catch((err)=> {
    console.err(err);
  });
