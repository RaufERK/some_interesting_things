import foo from './newFile.mjs';
import fs from 'fs';

const { log } = console; // <-деструктуризация console.log()
log('Main File message');

foo('Hello!!!!!!!!');
const allParamArray = process.argv;
log('Параметры при запуске ', allParamArray);
const currentDir = process.env.PWD;
console.log('Текущая папка =>', currentDir);

fs.writeFileSync('test.txt', currentDir);
fs.appendFileSync('test.txt', currentDir);
