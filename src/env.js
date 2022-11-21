let baseURL;
/*
switch (process.env.NODE_ENV) {
    case 'test':
        baseURL = 'http://localhost';
        break;

}
*/

console.log(process.env.NODE_ENV);

// if (process.env.NODE_ENV == 'test1') {
//     baseURL = 'http://localtp6'
// } else {
//     baseURL = 'http://api.daqishazhula.cn'
// }
baseURL = 'http://localtp6';
export default {
    baseURL
}