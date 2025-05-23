import { test, expect } from '@playwright/test';

test('Отправка формы без данных', async ({ page }) => {
  await page.goto('https://www.voxys.ru/contacts.html');

  await page.getByRole('button', { name: 'Отправить' }).click();
 
  await expect(page.getByText("Ваше сообщение отправлено")).toBeVisible(); 
  
});