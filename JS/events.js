/*Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div.
 При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. 
 При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение
  по умолчанию для этих сочетаний клавиш.*/
  let div = document.getElementById("div");
  let textarea=document.createElement("textarea");
document.addEventListener('keydown', function(event) {
console.log(event);    
if (event.ctrlKey  &&  event.code=="KeyE") { //правильно? 
  event.preventDefault();
  div.setAttribute("style", "display: none");
  
  textarea.innerText=div.innerText;
  textarea.setAttribute("style", "width: 300px; height: 200px;");
  document.body.appendChild(textarea);
}
});
document.addEventListener('keydown', function(event) {
  console.log(event); 
  if (event.ctrlKey  &&  event.code=="NumpadAdd") {
    event.preventDefault();
    let text = textarea.innerText;
    textarea.setAttribute("style", "display: none");
    div.setAttribute("style", "width: 300px; height: 200px;");
    div.innerText=text;

  }
})
console.log(div);