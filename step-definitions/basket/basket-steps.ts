import { Basket } from '../../domains/basket/basket';
import { Given, Then, When } from 'cucumber';
import expect from 'expect';

let basketPrice: number;
let basket: Basket;

Given('The user has one book in the basket', function () {
  basket = new Basket(1);
});

When('The user requests the price', function () {
  basketPrice = basket.calculatePrice();
});

Then('The price is ${int}', function (int: number) {
  expect(basketPrice).toBe(int);
});
