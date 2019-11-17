/*1. Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div.
 При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. 
 При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение
  по умолчанию для этих сочетаний клавиш.*/
/*let div = document.getElementById("div");
  let textarea=document.createElement("textarea");
document.addEventListener('keydown', function(event) {
    
if (event.ctrlKey  &&  event.code=="KeyE") { //правильно? 
  event.preventDefault();
  console.log(event);
  div.setAttribute("style", "display: none");
  
  textarea.innerText=div.innerText;
  textarea.setAttribute("style", "width: 300px; height: 200px;");
  document.body.appendChild(textarea);
}
});
document.addEventListener('keydown', function(event) { 
  
  if (event.ctrlKey  &&  event.code=="NumpadAdd") {
    event.preventDefault();
    console.log(event); 
  
    textarea.setAttribute("style", "display: none");
    div.setAttribute("style", "width: 300px; height: 200px;");
    div.innerText=textarea.value;
    

  }
})
console.log(div);*/

/*2. Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке.
 Учтите, что числовые значения должны сортироваться как числа, а не как строки*/
 let table = document.querySelector("table").rows;
 console.log(table);
 let tableArr = Array.from(table).slice(1);
 console.log(tableArr);
 console.log(tableArr[1].cells[1].innerText);
 
 let tableArrSotr = tableArr.sort((a, b) =>( 
 
  a.cells[0].innerText>b.cells[0].innerText ? 1:-1
     
 )
 );
 console.log(tableArrSotr);
 document.querySelector("table").tBodies[0].append(...tableArr);
 console.log(tableArrSotr);

