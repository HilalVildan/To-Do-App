const girdi = document.querySelector("#todo-input");
const ekleButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");
const yapildi = document.querySelector("#tamamlanan");
// const check = document.querySelectorAll(".fa-check");
// const sil = document.querySelectorAll(".fa-trash");
let liste = [];
let index = 0;
let total = 0;
let clicked = false;
let completed = 0;
const todoList = document.querySelector("#todo-ul");

ekleButon.addEventListener("click", () => {
  listeGöster();
  girdi.value = "";
});

const listeGöster = () => {
  liste.push([girdi.value, index, clicked]);

  todoList.innerHTML = ``;

  liste.forEach((element) => {
    todoList.innerHTML += `
        <li>
        <i value=${element[1]} class="fa-solid fa-check"></i>
        <span class="yazi" value=${element[1]} >${element[0]}</span> 
        <i value=${element[1]} class="fa-solid fa-trash"></i>
        </li>`;

    const check = document
      .querySelectorAll(".fa-check")
      .forEach((elementCheck) => {
        elementCheck.onclick = () => {
          let valueCheck = elementCheck.getAttribute("value");
          // console.log(liste[valueCheck]);
          elementCheck.style.color = "green";

          document.querySelectorAll(".yazi")[valueCheck].style.textDecoration =
            "line-through";

          // console.log(document.querySelectorAll(".yazi")[valueCheck]);

          completed += 1;
          yapildi.textContent = completed;
        };
      });
    const sil = document.querySelectorAll(".fa-trash").forEach((elementSil) => {
      elementSil.onclick = () => {
        let valueSil = elementSil.getAttribute("value");

        for (let index = 0; index < sil.length; index++) {
          if (liste[index][1] == valueSil) {
            liste.splice(index, 1);
            console.log(document.querySelectorAll("li"));

            document.querySelectorAll("li")[valueSil].innerHTML = ``;

            console.log(liste, "liste");
            console.log(valueSil);
            
          }
        }

        // const liList = document.querySelectorAll(".li-liste");

        //console.log(liste,valueSil);

        total -= 1;
        toplam.textContent = total;

       if (completed > 1) {
          completed -= 1;
          yapildi.textContent = completed; 
        }
      };
    });
  });
  total += 1;
  toplam.textContent = total;

  index += 1;
  console.log(liste);
};
