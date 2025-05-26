// 声明两个变量并赋值
let a = 5;
let b = 10;

// 输出初始值
console.log('交换前:');
console.log('a 的值:', a);
console.log('b 的值:', b);

// 交换变量的值（使用临时变量）
let temp = a;
a = b;
b = temp;

// 输出交换后的值
console.log('\n交换后:');
console.log('a 的值:', a);
console.log('b 的值:', b);    