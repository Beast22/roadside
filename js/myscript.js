jquery();  // $(); - если она единственная библиотека

$('#slideshow');

$('#content + li'); // выбор следующего тэга за #content

$('#content > li'); //  дочерние (не все) элементы списка внутри. Только сыновья

/*
Домашнее задание к 63-му уроку.

1. Найдите в html-коде страницы index.html картинку с id="img_4" и поместите её  внутрь абзаца.
2. Используя таблицу стилей mystyle.css, проделайте следующие манипуляции:

2а. Создайте css-селектор и пропишите css-правило, которое будет задавать рамку 
в 1px сплошную и красного цвета всем изображениям, 
которые находятся внутри  блока div с id="div_for_img". Проверьте в браузере.

2б. Измените селектор таким образом, чтобы рамка появлялась только у дочерних 
по отношению к блоку div с id="div_for_img" изображений. Проверьте в браузере.

2в. Измените селектор таким образом, чтобы рамка появлялась у абзаца, который 
следует за блоком div с id="div_for_img". Проверьте в браузере.

3. Удалите все внесенные в таблицу стилей изменения.
*/

