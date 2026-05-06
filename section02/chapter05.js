let p1 = 1;
let p2 = p1;

console.log(p1 == p2);
p2 = 2;
console.log(p2);

let o1 = { name: "이규언" };
let o2 = o1;
console.log(o1 === o2);
o2.name = "이엉규";
console.log(o1 === o2);
console.log(o1, o2);

let o3 = { ...o1 };
console.log(o1 === o3);
