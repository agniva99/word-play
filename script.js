const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const res=document.getElementById("result");
const btn=document.getElementById("submit");
let syn;
function myfunction(res){
  syn=res.synonyms[0];
  
}

btn.addEventListener("click",() =>{
  let inp=document.getElementById("word").value;
  /*let s=$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/thesaurus?word=' + inp,
    headers: { 'X-Api-Key': 'nXlDSm7feWiAYGxhmF7ctQ==JQh5AMaeOP1DhVLJ'},
    contentType: 'application/json',
    success: function(res) {
        console.log(res);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});*/
  fetch(`${url}${inp}`).then((response) =>{
    console.log(response.ok);
    return response.json();
  
  
  }).then((response) =>{
    console.log(response);
    result.innerHTML=
       `<div class="word">
        <h3>${inp}</h3>
      </div>
      <div class="details">
        <p>${response[0].meanings[0].partOfSpeech}</p>
      </div>
      <p class="meaning">${response[0].meanings[0].definitions[0].definition}</p>
      <p class="Example" id="Example">Eg:${response[0].meanings[0].definitions[0].example || ""}</p>`
    if(!response[0].meanings[0].definitions[0].example){
      Example.innerHTML="";
    }
    $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/thesaurus?word=' + inp,
    headers: { 'X-Api-Key': 'nXlDSm7feWiAYGxhmF7ctQ==JQh5AMaeOP1DhVLJ'},
    contentType: 'application/json',
    success: function(res) {
        console.log(res);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
}).then((res)=>{
    synonym.innerHTML=
      `<p class="syn sa"><b>Synonyms:</b> ${res.synonyms[0] || ""},${res.synonyms[1] ||""},${res.synonyms[2]||""}</p>`
    antonym.innerHTML=`<p class="ant sa"><b>Antonyms:</b>${res.antonyms[0]||""},${res.antonyms[1]||""}</p>`
    if(!res.antonyms[0] ||! res.synonyms[0]){
      synonym.innerHTML="";
      antonym.innerHTML="";
    }
  })
  
      
  }).catch((res)=>{
    result.innerHTML="Not found";
    synonym.innerHTML="";
    antonym.innerHTML="";
  })
  
  
  
})
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

let m=document.querySelectorAll("#contact")
openModalButtons.forEach(m => {
  m.addEventListener('click', () => {
    const modal = document.querySelector(m.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}