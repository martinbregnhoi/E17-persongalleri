 //find DOM elementer
let minTemplate = document.querySelector("#person-template");
let templateModtager = document.querySelector("#personinfo");
 //hent json
async function getJson(){
 //hent json
    let jsonObjekt = await fetch("galleriperson.json");
    let person = await jsonObjekt.json();
    console.log(person);
 //klon template og vis i DOM
    let klon = minTemplate.cloneNode(true).content;
    klon.querySelector(".data-navn").textContent = person.navn;
    klon.querySelector(".data-alder").textContent = person.alder;
    klon.querySelector(".data-mail").textContent = person.mail;
    klon.querySelector(".data-mobil").textContent = person.mobil;
    klon.querySelector(".data-snapchat").textContent = person.snapchat;
    klon.querySelector(".data-bopæl").textContent = person.bopæl;
    klon.querySelector(".data-civilstatus").textContent = person.civilstatus;
    klon.querySelector(".data-køn").textContent = person.køn;
    klon.querySelector(".data-profession").textContent = person.profession;
    klon.querySelector(".data-interesser").textContent = person.interesser;
    klon.querySelector(".data-kæledyr").textContent = person.kæledyr;
    klon.querySelector(".data-livret").textContent = person.livret;
    templateModtager.appendChild(klon);

}

 //læs script når DOM er hentet
 document.addEventListener("DOMContentLoaded", function (event) {
     getJson();
 });
