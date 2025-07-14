// 1
let a = 25;
while (a >= 0) {
   console.log(a);
   a--;
}
//////////////

let b = 25;
do {
   console.log(b);
   b--;
} while (b >= 0);
//////////////

for (let c = 25; c >= 0; c--) {
   console.log(c);
}

// 2

let d = 10;
while (d <= 50) {
   if (d % 5 === 0) {
      console.log(d);
   }
   d++;
}
/////////////

let e = 10;
do {
   if (e % 5 === 0) {
      console.log(e);
   }
   e++;
} while (e <= 50);
/////////////

for (let f = 10; f <= 50; f++) {
   if (f % 5 === 0) {
      console.log(f);
   }
}

// 3

let g = 1;
let sum1 = 0;
while (g <= 100) {
   sum1 += g;
   g++;
}
console.log('Сума:', sum1);
/////////////

let h = 1;
let sum2 = 0;
do {
   sum2 += h;
   h++;
} while (h <= 100);
console.log('Сума:', sum2);
/////////////

let sum3 = 0;
for (let i = 1; i <= 100; i++) {
   sum3 += i;
}
console.log('Сума:', sum3);
