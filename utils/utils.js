module.exports.add = (a,b) => a+b;

module.exports.asyncAdd = (a, b, callback) => {
  callback(a+b);
};

module.exports.square = (x,callback) => {
  setTimeout(()=>{
    callback(x*x);
  }, 1000);
};

module.exports.setName = (user, fullName) => {
  name = fullName.split(' ');
  user.firstName = name[0];
  user.lastName = name[1];

  return user
}
