#!/usr/bin/env node

import inquirer from 'inquirer';

const conversion = {
  PKR: {
    USD: 0.0044,
    GBP: 0.0037,
    PKR: 1,
  },
  GBP: { USD: 1.21, GBP: 1, PKR: 272 },
  USD: { USD: 1, GBP: 0.83, PKR: 226 },
};

const answers: {
  from: 'PKR' | 'USD' | 'GBP';
  to: 'PKR' | 'USD' | 'GBP';
  amount: number;
} = await inquirer.prompt([
  {
    type: 'list',
    name: 'from',
    choices: ['PKR', 'USD', 'GBP'],
    message: 'Choose a currency from: ',
  },
  {
    type: 'list',
    name: 'to',
    choices: ['PKR', 'USD', 'GBP'],
    message: 'Choose a currency to: ',
  },
  {
    type: 'number',
    name: 'amount',
    message: 'Enter an amount to convert: ',
  },
]);

const { amount, from, to } = answers;

const result = Math.ceil(amount * conversion[from][to]).toFixed(2);

console.log(
  `THE CONVERSION OF ${amount}${from} is ${result}${to}. Thank you for using our service`
);
