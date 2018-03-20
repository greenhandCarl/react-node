const fs = require('fs');

const addControllers = (router, dir) => {
  const js_files = fs.readdirSync(`${__dirname}/${dir}`).filter(
    f => f.endsWith('.js')
  );
  js_files.forEach(f => {
    console.log(`process controller: ${f}...`);
    let mapping = require(`${__dirname}/${dir}/${f}`);
    addMapping(router, mapping);
  });
};

const addMapping = (router, mapping) => {
  for (let url in mapping) {
    if (url.startsWith('GET ')) {
      const path = url.slice(4);
      router.get(path, mapping[url]);
      console.log(`register URL mapping: GET ${path}`);
    } else if (url.startsWith('post ')) {
      const path = url.slice(5);
      router.post(path, mapping[url]);
      console.log(`register URL mapping: POST ${path}`);
    } else if (url.startsWith('PUT ')) {
      const path = url.slice(4);
      router.put(path, mapping[url]);
      console.log(`register URL mapping PUT ${path}`);
    } else if (url.startsWith('DELETE ')) {
      const path = url.slice(7);
      router.put(path, mapping[url]);
      console.log(`register URL mapping DELETE ${path}`);
    }
  }
};

module.exports = (dir) => {
  let
    controllers_dir = dir || 'constrollers',
    router = require('koa-router')();
    addControllers(router, dir);
    return router.routes();
};

