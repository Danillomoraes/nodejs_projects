const expect = require ('expect');
const utils = require('./utils');

it('should add two nunbers', () => {
  var res = utils.add(33,11);

  expect(res).toBe(44).toBeA('number',`should be a number ${res}`);
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4,3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', (done) => {
  utils.square(2, (square) => {
    expect(square).toBe(4).toBeA('number');
    done();
  });
});

it('should set the name and last name', () => {
  var user = {
    location : 'Cayamares',
    age: '22'
  };
  var res = utils.setName(user, 'Danillo Moraes');

  expect(res)
    .toInclude({
      firstName: 'Danillo',
      lastName: 'Moraes'})
    });

// it('should not be equal', () => {
//   //expect(12).toNotBe(12);
//   //expect({name: 'danillom'}).toNotEqual({name: 'Danillom'}); // toBe tem q ser o mesmo obj, equal objs semelhantes
//   // expect([2,3,4]).toInclude(2);
//   expect({
//     nome: "danillom",
//     age:25,
//     location: 'Cajamar'
//   }).toInclude({
//     age: 25
//   })
// });
