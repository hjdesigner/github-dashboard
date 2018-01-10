// import métodos from 'biblioteca'
// *  carregar tudo da lib
// as => alias para o métodos (novo nome);

import * as R from 'ramda';
import sum, { PI } from './utils';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3 = R.union(arr1, arr2);

console.log(arr3);

console.log(sum(3, 3));

console.log(PI);