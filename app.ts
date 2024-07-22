const table1 = document.querySelector("#table1") as HTMLElement;
const table2 = document.querySelector("#table2") as HTMLElement;
const table3 = document.querySelector("#table3") as HTMLElement;
const table4 = document.querySelector("#table4") as HTMLElement;
const table5 = document.querySelector("#table5") as HTMLElement;
const table6 = document.querySelector("#table6") as HTMLElement;
const table7 = document.querySelector("#table7") as HTMLElement;
const table8 = document.querySelector("#table8") as HTMLElement;
const table9 = document.querySelector("#table9") as HTMLElement;
const table10 = document.querySelector("#table10") as HTMLElement;

table1.innerHTML = "";
table2.innerHTML = "";
table3.innerHTML = "";
table4.innerHTML = "";
table5.innerHTML = "";
table6.innerHTML = "";
table7.innerHTML = "";
table8.innerHTML = "";
table9.innerHTML = "";
table10.innerHTML = "";

for (let i = 1; i <= 10; i++) {
  let one = `${1} X ${i} = ${1 * i} <br> `;
  table1.innerHTML += one;

  let two = `${2} X ${i} = ${2 * i} <br> `;
  table2.innerHTML += two;

  let three = `${3} X ${i} = ${3 * i} <br> `;
  table3.innerHTML += three;

  let four = `${4} X ${i} = ${4 * i} <br> `;
  table4.innerHTML += four;

  let five = `${5} X ${i} = ${5 * i} <br> `;
  table5.innerHTML += five;

  let six = `${6} X ${i} = ${6 * i} <br> `;
  table6.innerHTML += six;

  let seven = `${7} X ${i} = ${7 * i} <br> `;
  table7.innerHTML += seven;

  let eight = `${8} X ${i} = ${8 * i} <br> `;
  table8.innerHTML += eight;

  let nine = `${9} X ${i} = ${9 * i} <br> `;
  table9.innerHTML += nine;

  let ten = `${10} X ${i} = ${10 * i} <br> `;
  table10.innerHTML += ten;
}
