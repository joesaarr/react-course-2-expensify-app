const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name : 'Mattias',
      age: 23
    });
    // reject('Something went wrong!');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log(data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is mu other promise');
      // reject('Something went wrong!');
    }, 5000);
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');