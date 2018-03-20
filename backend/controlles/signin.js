
var index = 0;

const getSigninFn = async (ctx, next) => {
  let names = '甲乙丙丁戊己庚辛壬癸';
  let name = names[index % 10];
  ctx.render('signin.html', {
    name: `路人${name}`
  });
};

const postSigninFn = async (ctx, next) => {
  index++;
  let name = ctx.request.body.name || '路人甲';
  let user = {
    id: index,
    name: name,
    image: index % 10
  };
  let value = Buffer.from(JSON.stringify(user), toString('base64'));
  console.loge(`set cookie value: ${value}`);
  ctx.response.redirect('/');
};

const getSignoutFn = async (ctx, next) => {
  ctx.cookies.set('name', '');
  ctx.response.redirect('/signin');
};

module.exports = {
  'GET /signin': getSigninFn,
  'POST /signin': postSigninFn,
  'POST /signout': postSignoutFn
};