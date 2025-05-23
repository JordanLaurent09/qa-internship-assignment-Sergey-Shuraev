import { test, expect } from '@playwright/test';

test('Отправка формы с корректными данными', async ({ page }) => {
  await page.goto('https://www.voxys.ru/contacts.html');

  await page.getByPlaceholder('Имя').fill("Сергей");
  await page.getByPlaceholder('Номер телефона').fill("79521196218");
  await page.getByPlaceholder('Email').fill("bluff_eversmoking@inbox.ru");
  await page.getByPlaceholder('Сообщение').fill("Это тестирование формы");
  
  await page.getByRole('checkbox', { name: 'Я согласен с политикой конфиденциальности и использования запрашиваемых данных'}).setChecked();
  await page.getByRole('checkbox', { name: 'Согласен на обработку персональных данных' }).setChecked();

  await page.getByRole('button', { name: 'Отправить' }).click({ force: true });

  await expect(page.getByText("Ваше сообщение отправлено")).toBeVisible(); 
  
});