'use strict';

const job = 'developer';

const user = {};
user.firstName = 'Ana';
user.lastName = 'Pérez';
user.age = new Number(36);
user.job = job;

console.log(`${user.firstName} ${user.lastName} ${user.age} ${user.job}`);

user.firstName = 'Sandra';
user.age = new Number(user.age + 1);

console.log(`${user.firstName} ${user.lastName} ${user.age} ${user.job}`);


