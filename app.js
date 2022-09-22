const girdi = document.querySelector("#todo-input");
const ekleButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");
const yapildi = document.querySelector("#tamamlanan");
// const check = document.querySelectorAll(".fa-check");
// const sil = document.querySelectorAll(".fa-trash");
let liste = [];
let index = 0;
let total = 0;
let completed = 0;
const todoList = document.querySelector("#todo-ul");





ekleButon.addEventListener("click", () =>{

    listeGöster();
    girdi.value="";
    
})


const listeGöster = () => {

liste.push([girdi.value, index])
    


todoList.innerHTML = ``

    liste.forEach(element => {

        todoList.innerHTML += `
        <li class ="li-liste">
        <a><i value=${element[1]} class="fa-solid fa-check"></i></a>
        <span class="yazi" value=${element[1]} >${element[0]}</span> 
        <a><i value=${element[1]} class="fa-solid fa-trash"></i></a>
        </li>`;

            const check = document.querySelectorAll(".fa-check").forEach(elementCheck => {

                elementCheck.onclick = () => {

                    let valueCheck = elementCheck.getAttribute("value");
                    // console.log(liste[valueCheck]);
                    elementCheck.style.color = "green"
                    
                    document.querySelectorAll(".yazi")[valueCheck].style.textDecoration =
                      "line-through";

                      // console.log(document.querySelectorAll(".yazi")[valueCheck]);

                       completed +=1
                      yapildi.textContent = completed


                    
                    

                }
               
            });
        
            const sil = document.querySelectorAll(".fa-trash").forEach(elementSil => {



                elementSil.onclick = () => {

                    let valueSil = elementSil.getAttribute("value");

                const silinen =liste.filter(item => !valueSil.includes(item))
                console.log(silinen);
                  // liste.splice(valueSil,0)



                    // const liList = document.querySelectorAll(".li-liste");
                    
                    document.querySelectorAll(".li-liste")[valueSil].innerHTML = ``; 
                   //console.log(liste,valueSil);
                    
                    

                    total -= 1;
                    toplam.textContent = total;

                    if (completed > 1){
                        completed -=1;
                        yapildi.textContent = completed;
                    };
                    


                    
                }
            })




    });
total += 1;
toplam.textContent = total

index +=1;
console.log(liste);



}


