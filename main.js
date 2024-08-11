
// Optional Chaining

const user = {
  //name: 'Miguel',
  age: 20,
  address: {
    street: 'Rua Teste',
    number: 107,
    zip: {
      code: 895500,
      city: 'Guarulhos'
    },
    //showFullAdress(){
    //  return 'ok';
    //}
  }
};

const key = 'state';

document.body.innerText = user.address[key] ?? 'nao existe'








