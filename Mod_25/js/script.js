// // --1--
// // 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// // бал і кількість пропущених занять
// // 2) написати метод який буде виводити цю інформацію
// // 3) написати три варіанти студентів
// // 4) прикріпити знначення за допомогою call apply bind

// // Створюємо функцію, яка буде виводити інформацію
// function showInfo() {
//   console.log(
//     `Студент: ${this.name}, Спеціальність: ${this.specialty}, Середній бал: ${this.avgGrade}, Пропущено занять: ${this.missedLessons}`,
//   );
// }

// // 3 туденти
// const student1 = {
//   name: "Іван",
//   specialty: "Frontend",
//   avgGrade: 4.8,
//   missedLessons: 2,
// };

// const student2 = {
//   name: "Олена",
//   specialty: "Design",
//   avgGrade: 5.0,
//   missedLessons: 0,
// };

// const student3 = {
//   name: "Петро",
//   specialty: "Python",
//   avgGrade: 3.5,
//   missedLessons: 10,
// };

// // Прикріплюємо значення (call, apply, bind)
// console.log("--- Вивід через CALL ---");
// showInfo.call(student1);

// console.log("--- Вивід через APPLY ---");
// showInfo.apply(student2); //

// console.log("--- Вивід через BIND ---");
// const showPetro = showInfo.bind(student3); // Створює копію функції для Петра
// showPetro(); //

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// function showDefinition(text) {
//   alert(text);
// }

// //  Визначаємо тексти
// const htmlDesc =
//   "HTML (HyperText Markup Language) — це мова розмітки для створення структури вебсторінок.";
// const cssDesc =
//   "CSS (Cascading Style Sheets) — це мова стилів, яка відповідає за зовнішній вигляд сторінки.";

// //  Знаходимо кнопки в документі
// const htmlBtn = document.querySelector("#html-btn");
// const cssBtn = document.querySelector("#css-btn");

// // 4. Прив'язуємо функції до кнопок за допомогою BIND
// // Bind створює копію функції з уже підставленим текстом
// htmlBtn.onclick = showDefinition.bind(null, htmlDesc);
// cssBtn.onclick = showDefinition.bind(null, cssDesc);

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function createShop() {
//   return function (productName, pricePerKg, quantity) {
//     // Рахуємо вартість (ціна помножена на кількість)
//     const totalPrice = pricePerKg * quantity;

//     // Повертаємо назву товару та підсумкову вартість
//     return `${productName}: вартість ${totalPrice.toFixed(2)} грн`;
//   };
// }

// // 2. Отримуємо інструмент для розрахунку
// const shop = createShop();

// // 3. Перевіряємо на твоїх варіантах:
// console.log(shop("banana", 30, 4.5)); // 135.00
// console.log(shop("cherry", 58, 1.3)); // 75.40
// console.log(shop("orange", 89, 3.4)); // 302.60
