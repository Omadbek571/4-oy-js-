// 1-Savol
// 1. Berilgan stiring ichidan olib tashlanishi kerak bo’lgan stringni birinchi uchraganini olib tashlang.

// JAVOB

// function removeFirstOccurrences(str, value) {
//     let index = str.indexOf(value);
//     if (index !== -1) {
//         return str.slice(0, index) + str.slice(index + value.length);
//     }
//     return str;
// }

// console.log(removeFirstOccurrences('To be or not to be', 'not'));
// console.log(removeFirstOccurrences('I like legends', 'end'));
// console.log(removeFirstOccurrences('ABABAB', 'BA'));


// // 2 Savol

// // 2. Birinchi va so’ngi burchali qavslarni olib tashlang.

// JAVOB

// let str = '<span>'
// function unbracketTag(str) {
//     let tag = str.slice(1, -1)
//     return tag
// }

// console.log(unbracketTag(str));

// 3-SAVOL

// 3. Funksiyaga berilgan son tub bo’lsa true, aks holda false qaytarsin:
// Example


// JAVOB

// let num = +prompt('Sonni kiriting');
// function isPrime(n) {
//     let counter = 0;
//     let res = true
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             counter++;
//         }
//     }
//     if (counter == 2) {
//         res = true
//         return res
//     } else {
//         res = false
//         return res

//     }
// }

// console.log(isPrime(num));


// 4-SAVOL

// let opj = [
//     { country: 'Belarus', city: 'Brest' },
//     { country: 'Russia', city: 'Omsk' },
//     { country: 'Russia', city: 'Samara' },
//     { country: 'Belarus', city: 'Grodno' },
//     { country: 'Belarus', city: 'Minsk' },
//     { country: 'Poland', city: 'Lodz' }
// ]

// function group(array, keySelector, valueSelector) {
//     let result = {};

//     array.forEach(item => {
//         let key = keySelector(item);
//         let value = valueSelector(item);

//         if (!result[key]) {
//             result[key] = [value];
//         } else {
//             result[key].push(value);
//         }
//     });

//     return result;
// }

// const arr = [
//     { country: 'Belarus', city: 'Brest' },
//     { country: 'Russia', city: 'Omsk' },
//     { country: 'Russia', city: 'Samara' },
//     { country: 'Belarus', city: 'Grodno' },
//     { country: 'Belarus', city: 'Minsk' },
//     { country: 'Poland', city: 'Lodz' }
// ];

// const result = group(arr, item => item.country.toLowerCase(), item => item.city);
// console.log(result);


// 5-SAVOL

// let malumotSon1 = +prompt("ILTIMOS 1 QIYMATI KIRITING")
// let malumotSon2 = +prompt("ILTIMOS 2 QIYMATI KIRITING")


// function getSumBetweenNumbers(n1, n2) {
//     let son = 0;
//     let start = Math.min(n1, n2);
//     let end = Math.max(n1, n2);

//     for (let i = start; i <= end; i++) {
//         son += i;
//     }

//     return son;
// }

// console.log(getSumBetweenNumbers(malumotSon1, malumotSon2));


// 6-SAVOL

// function getElementsOneTime(arr) {
//     let result = [];
//     let sonlar = {};

//     arr.forEach(element => {
//         sonlar[element] = (sonlar[element] || 0) + 1;
//     });

//     for (let key in sonlar) {
//         if (sonlar[key] === 1) {
//             result.push(Number(key));
//         }
//     }

//     return result;
// }

// let arr = [1, 5, 6, 1, 5, 7, 77, 2];

// console.log(getElementsOneTime(arr));


// 7-SAVOL

// function removeDuplicate(arr) {
//     let obj = {};
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         if (!obj[item]) {
//             result.push(item);
//             obj[item] = true;
//         }
//     }

//     return result;
// }

// let arr = [1, 2, 5, 4, 5, 7, 7, 9, 9];
// console.log(removeDuplicate(arr));

// 8-SAVOL

// function elementis(arr, k, m) {
//     if (k < 0 || m >= arr.length || k >= m) {
//         return "Noto'g'ri indekslar kiritildi";
//     }

//     let removedElements = arr.splice(k, m - k + 1);
//     return {
//         count: removedElements.length,
//         elements: removedElements
//     };
// }

// let n = +prompt('Massiv uzunligini kiriting');
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(i + 1);
// }

// let k = +prompt('Indeksi k kiriting');
// let m = +prompt('Indeksi m kiriting');

// let result = elementis(arr, k, m);

// console.log(`Ochirilgan elementlar soni: ${result.count}`);
// console.log(`Ochirilgan elementlar: ${result.elements}`);



//  9-SAVOL
// const books = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         alreadyRead: false,
//     },
//     {
//         title: "Dunyo ishlari",
//         author: "O'tkir Hoshimov",
//         alreadyRead: true,
//     },
//     {
//         title: "Vaqtning qadri",
//         author: "Abdulfattoh Abu G'udda",
//         alreadyRead: false,
//     },
// ]
// let res = []
// books.forEach(el => {
//     if (el.alreadyRead) {
//         res.push('oqilgan')
//     } else {
//         res.push('oqilmagan')
//     }
//     return res
// })
// console.log(res);

// 10-SAVOL

// function hisoblashFunc(products) {
//     let totalSum = 0;

//     for (let padukt of products) {
//         let prise = padukt.price * (1 - padukt.discount / 100);
//         let totalPrice = prise * padukt.quantity;
//         totalSum += totalPrice;
//     }

//     return totalSum;
// }

// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// console.log("umumi sumasi", hisoblashFunc(products));

