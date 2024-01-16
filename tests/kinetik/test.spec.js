import { test, expect } from '@playwright/test';
import { randomFill } from 'crypto';

test('test', async ({ page }) => {
  //Navigate to url 'http://automationexercise.com'
  await page.goto('https://automationexercise.com/');
  //Verify that home page is visible successfully
  await expect(page.locator('div').filter({ hasText: 'Home  Products Cart Signup' }).nth(2)).toBeVisible();
  await expect(page.getByText('Category Women Dress Tops')).toBeVisible();
  //Add products to car
  await page.locator('.features_items > div:nth-child(3)').click();
  await page.locator('.overlay-content > .btn').first().click();
  //Click 'Cart' button
  await page.locator('p').filter({ hasText: 'View Cart' }).click();
  //Verify that cart page is displayed
  await expect(page.getByText('Home Shopping Cart Proceed To')).toBeVisible();
  //Click Proceed To Checkout
  await page.getByText('Proceed To Checkout').click();
  //Click 'Register / Login' button
  await page.getByRole('link', { name: 'Register / Login' }).click();
  //Fill all details in Sign up and create account
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('Ahona');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('ahona.sqa+'+ Math.floor(Math.random() * 100)+'@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByLabel('Mrs.').check();
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('abcd@1234');
  await page.locator('#days').selectOption('28');
  await page.locator('#months').selectOption('4');
  await page.getByLabel('First name *').click();
  await page.getByLabel('First name *').fill('Ahona');
  await page.getByLabel('Last name *').click();
  await page.getByLabel('Last name *').fill('Afrin');
  await page.getByLabel('Company', { exact: true }).click();
  await page.getByLabel('Company', { exact: true }).fill('Test Company');
  await page.getByLabel('Address * (Street address, P.').click();
  await page.getByLabel('Address * (Street address, P.').fill('AB House');
  await page.getByLabel('Address 2').click();
  await page.getByLabel('Address 2').fill('New Lane');
  await page.getByLabel('Country *').selectOption('United States');
  await page.getByLabel('State *').click();
  await page.getByLabel('State *').fill('AB State');
  await page.getByLabel('City *').click();
  await page.getByLabel('City *').fill('AB city');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('AB1234');
  await page.getByLabel('Mobile Number *').click();
  await page.getByLabel('Mobile Number *').fill('017111111111');
  await page.getByRole('button', { name: 'Create Account' }).click();
  //Verify 'ACCOUNT CREATED!' and click 'Continue' button
  await expect(page.getByText('Account Created!')).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  //Verify ' Logged in as username' at top
  await expect(page.getByText('Logged in as Ahona')).toBeVisible();
  //Click 'Cart' button
  await page.getByRole('link', { name: ' Cart' }).click();
  //Click 'Proceed To Checkout' button
  await page.getByText('Proceed To Checkout').click();
  //Verify Address Details and Review Your Order
  await expect(page.locator('#address_delivery')).toContainText('Your delivery address Mrs. Ahona Afrin Test Company AB House New Lane AB city AB State AB1234 United States 017111111111');
  await expect(page.locator('#address_invoice')).toContainText('Your billing address Mrs. Ahona Afrin Test Company AB House New Lane AB city AB State AB1234 United States 017111111111');
  await expect(page.locator('tbody')).toContainText('Total Amount');
  await expect(page.getByRole('row', { name: 'Product Image Blue Top Women' })).toBeVisible();
  //Enter description in comment text area and click 'Place Order'
  await page.locator('textarea[name="message"]').click();
  await page.locator('textarea[name="message"]').fill('Order a new dress.');
  await page.getByRole('link', { name: 'Place Order' }).click();
  //Enter payment details: Name on Card, Card Number, CVC, Expiration date
  await page.locator('input[name="name_on_card"]').click();
  await page.locator('input[name="name_on_card"]').fill('Ahona');
  await page.locator('input[name="card_number"]').click();
  await page.locator('input[name="card_number"]').fill('123456789');
  await page.getByPlaceholder('ex.').click();
  await page.getByPlaceholder('ex.').fill('311');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('12');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('2025');
  //Click 'Pay and Confirm Order' button
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  //Verify the success message 'Your order has been placed successfully!'
  await expect(page.getByText('Congratulations! Your order')).toBeVisible();
  await expect(page.locator('#form')).toContainText('Congratulations! Your order has been confirmed!');
});