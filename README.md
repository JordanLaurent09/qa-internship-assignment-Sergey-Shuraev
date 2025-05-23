Мой проект - тестирование страницы сайта voxys.ru. В мою задачу входило проверить страницу
на наличие багов, ошибок, проверить её работоспособность. Для тестирования я использовал
как ручной, так и автоматический подходы.

Инструменты: 
  автоматическое тестирование -  Playwright
  проверка работы Rest-API - Postman. 
  
В папке test-cases содержится список тест-кейсов, проверенных при помощи 
ручного тестирования. Папка automation содержит файлы с авто-тестами. 

Инструкция по автоматическим тестам: 
1. запустить в среде разработки Visual Studio Code команду: npm init playwright@latest;
2. в автоматически созданной папке tests создать новый файл формата .js, примерное имя <Ваш вариант названия>.spec.js, и вставить в него код из предоставленных файлов с тестами
3. либо вставить в данную папку файлы с предоставленными файлами с тестами
4. либо воспользоваться уже находящимся там файлом example.spec.js, предварительно очистив его от кода по умолчанию и вставив в него код из предоставленных файлов с тестами
5. запустить тесты при помощи команды: npx playwright test ./test/<полное имя Вашего файла>

ПРИМЕЧАНИЕ. В ходе проведения автоматических тестов мной обнаружены непреодолимые для уровня начинающего тестировщика препятствия - 
к примеру, форма обратной связи требует обработки капчи, что является проблематичным для автоматизированного тестирования.
