var somePromise = new Promise ((resolve, reject) => {

var r = parseInt(Math.random() * 10);

  setTimeout(() => {
    if(r%2 === 0) {
      resolve(`Hey its worked ${r}`);
    }else {
      reject(`hey... it didnt work ${r}`);
    }
  }, 2500);
});

somePromise.then ((message) => {
  console.log(message);
}, (error) => {
  console.log(error);
});
