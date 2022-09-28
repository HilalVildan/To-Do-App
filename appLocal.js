//!burada liste adında, local de LISTE adında boş bir liste oluştur, listenin içi doluysa dolu listeyi getir
let liste = JSON.parse(localStorage.getItem("LISTE")) ?? [];

let total = 0;

let completed = 0;

const listeInput = document.querySelector("#todo-input");
const listeUl = document.querySelector("#todo-ul");
const listeButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");

//!Add butonuna basıldığında

listeButon.onclick = () => {
  if (!listeInput.value) {
    alert("lütfen bir not giriniz");
  } else if (liste.includes(listeInput.value)) {
    return;
  } else {
    liste.push(listeInput.value);

    //!liste ye eleman eklenince  localStorage deki LISTE yi güncelle
    localStorage.setItem("LISTE", JSON.stringify(liste));

    total += 1;
    console.log(liste);
    //!ekranda listeyi göster
    showListe();
    listeInput.value = "";
  }
};
const showListe = () => {
  listeUl.innerHTML += `<li class="ayse">
<i class="fa fa-check fa-lg"></i>
 <p>${listeInput.value}</p>

 
<i class="fa fa-trash fa-lg"></i>
</li>`;

  toplam.textContent = total;

  listeInput.focus();

  //!silme
  createSilButon();
  //!check
  createCheckButon();
};

const createSilButon = () => {
  document.querySelectorAll(".fa-trash").forEach((a) => {
    a.onclick = () => {
      const silinecekIndis = liste.indexOf(
        a.previousElementSibling.textContent
      );

      liste.splice(silinecekIndis, 1);

      a.parentElement.remove();
      //!listeden eleman silinince localStorage deki LISTE yi güncelle
      localStorage.setItem("LISTE", JSON.stringify(liste));

      total = total - 1;
      toplam.textContent = total;

      if (completed > 0 && a.parentElement.classList.contains("checked")) {
        completed = completed - 1;
        document.querySelector("#tamamlanan").textContent = completed;
      }
    };
  });
};

const createCheckButon = () => {
  //!1.yol
  document.querySelectorAll(".fa-check").forEach((a) => {
    a.onclick = () => {
      if (a.parentElement.classList.contains("checked")) {
        a.parentElement.classList.remove("checked");

        completed = completed - 1;
      } else {
        a.parentElement.classList.add("checked");
        completed = completed + 1;
      }
      document.querySelector("#tamamlanan").textContent = completed;
    };
  });
};
