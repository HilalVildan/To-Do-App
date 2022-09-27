const ekleButon = document.querySelector("#todo-button");
const girdi = document.querySelector("#todo-input");
const yapildi = document.querySelector("#tamamlanan");
liste = [];
total = 0;
completed = 0;

ekleButon.onclick = function () {
  if (girdi.value.length == 0) {
    alert("Lütfen bir görev giriniz!!!");
  } else if (!liste.includes(girdi.value)) {
    liste.push(girdi.value);

    console.log(girdi.value, liste);
    //console.log(!girdi.value.includes(liste));
    document.querySelector("#todo-ul").innerHTML += `
        <li value=${girdi.value}>
        <i class="fa-solid fa-check"></i>
        <span  >${girdi.value}</span> 
        <i class="fa-solid fa-trash"></i>
        </li>`;

    girdi.value = "";
    total += 1;
    toplam.textContent = total;

    const sil = document.querySelectorAll(".fa-trash");
    for (let i = 0; i < sil.length; i++) {
      sil[i].onclick = function () {
        this.parentNode.remove();

        let index = liste.indexOf(this.parentNode.getAttribute("value"));
        liste.splice(index, 1);
        console.log(liste);

        total -= 1;
        toplam.textContent = total;

        if (completed > 0) {
          completed -= 1;
          yapildi.textContent = completed;
        }
      };

      const check = document.querySelectorAll(".fa-check");
      for (let i = 0; i < check.length; i++) {
        check[i].onclick = function () {
          if (this.parentElement.classList.value) {
            console.log("evet");
            this.parentElement.classList.value = "";

            completed -= 1;
            yapildi.textContent = completed;
          } else {
            //
            //  console.log(this.parentElement.classList.value);
            this.parentElement.classList.value = "checked";

            completed += 1;
            yapildi.textContent = completed;
          }
        };
      }
    }
  } else {
    alert("Lütfen ayni görevi girmeyin!!");
  }
};
