//!burada list adında, local de list adında boş bir list oluştur, listnin içi doluysa dolu listyi getir
let list = JSON.parse(localStorage.getItem("list")) ?? [];

let total = 0;

let completed = 0;

const listInput = document.querySelector("#todo-input");
const listUl = document.querySelector("#todo-ul");
const listButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");

//!Add butonuna basıldığında

listButon.onclick = () => {
  if (!listInput.value) {
    alert("lütfen bir not giriniz");
  } else if (list.includes(listInput.value)) {
    return;
  } else {
    list.push(listInput.value);

    //!list ye eleman eklenince  localStorage deki list yi güncelle
    localStorage.setItem("list", JSON.stringify(list));

    total += 1;
    console.log(list);
    //!ekranda listyi göster
    showlist();
    listInput.value = "";
  }
};
const showlist = () => {
  listUl.innerHTML += `<li class="ayse">
<i class="fa fa-check fa-lg"></i>
 <p>${listInput.value}</p>

 
<i class="fa fa-trash fa-lg"></i>
</li>`;

  toplam.textContent = total;

  listInput.focus();

  //!silme
  createDeleteButon();
  //!check
  createCheckButon();
};

const createDeleteButon = () => {
  document.querySelectorAll(".fa-trash").forEach((a) => {
    a.onclick = () => {
      const silinecekIndis = list.indexOf(a.previousElementSibling.textContent);

      list.splice(silinecekIndis, 1);

      a.parentElement.remove();
      //!listden eleman silinince localStorage deki list yi güncelle
      localStorage.setItem("list", JSON.stringify(list));

      total = total - 1;
      toplam.textContent = total;

      if (completed > 0 && a.parentElement.classList.contains("checked")) {
        completed = completed - 1;
        document.querySelector("#is-done").textContent = completed;
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
      document.querySelector("#is-done").textContent = completed;
    };
  });
};
