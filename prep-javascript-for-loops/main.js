// create your loops here.
let loop1 = '';

for (let i = 0; i < 10; i++) {
  loop1 += i + '\n';
}

console.log(loop1);

let loop2 = '';

for (let i = 0; i < 10; i++) {
  loop2 += (i * 2) + '\n';
}

console.log(loop2);

let loop3 = '';

for (let i = 100; i >= 0; i--) {
  loop3 += 'Time till explosion: ' + i + '!' + '\n';
}

console.log(loop3);
