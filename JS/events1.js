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
console.log(document.querySelector("table"));
let tableArr = Array.from(table).slice(1);
console.log(tableArr);

document.body.addEventListener("click", e => {
  console.log(e);
  let target = e.target;
  if (target.tagName != "TH") return;

  let tableArrSort = tableArr.sort((a, b) => {
    let i = target.cellIndex;
    switch (Number(a.cells[i].innerText) == a.cells[i].innerText) {
      case true:
        if (a.cells[i].innerText - b.cells[i].innerText > 0) return 1;
        else if (a.cells[i].innerText - b.cells[i].innerText < 0) return -1;
        return 0;

      case false:
        if (a.cells[i].innerText > b.cells[i].innerText) return 1;
        else if (a.cells[i].innerText < b.cells[i].innerText) return -1;
        return 0;
    }
   
  });
  console.log(tableArrSort);
  document.querySelector("table").append(...tableArrSort); // в учебнике пишут table.tBodies[0].append, как правильно?
});
