//Nullesh Coalesing Operator -> operador para lidar com nulos

const idade = 0;

// 0, '', [], false, undefined, null => falsy 
// o ?? serve para separar valores que sao significativos pros que nao sao.
// 0 é um valor significativo, se eu usar || o javascrip vai identificar como
// nao significativo, já usando o operador ?? o javcascript identifica 
// como significativo.

document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado');
