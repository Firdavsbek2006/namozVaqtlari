
//-----------START DYNAMIC OPTION-----------//
async function dynamicOption(){
  regions.sort();
  regions.forEach((e)=>{
    const option = document.createElement('option');
    option.setAttribute('value', `${e}`);
    option.innerHTML = `${e}`;

    $("#select").appendChild(option);
  });
}
dynamicOption();
//-----------END DYNAMIC OPTION-----------//

//-----------START CHANGE MINTAQA WHILE RENDER OPTION-----------//
function renderOptions(){
  regions.forEach(()=>{
    $("#select").addEventListener("change", (e)=>{
      $(".mintaqa").innerHTML = e.target.value;
    })
  });
};
renderOptions()
//-----------END CHANGE MINTAQA WHILE RENDER OPTION-----------//

//-----------START RENDER CARDS-----------//
async function renderData(){
  const API_URL = "https://islomapi.uz/api/present/";

  $("#select").addEventListener("change", (e) => {
    fetch(API_URL + "week?region=" + $("#select").value)
      .then((res) => res.json())
      .then((data) => {
        $(".weeks").innerHTML = "";
        for(let i = 0; i < data.length; i++){
          let weekDay = document.createElement('div')
          weekDay.setAttribute("class", "weeks");
          weekDay.innerHTML = `
          <div class="week-name bg-secondary text-light text-center p-4">${data[i].weekday}</div>
          <div class="main-wrapper">
              <div class="card">
                  <h3 class="card__title">Tong</h3>
                  <img src="./images/tong.svg" alt="Tong" width="100%">
                  <time class="card__time tong">${data[i].times.tong_saharlik}</time>
              </div>
              <div class="card">
                  <h3 class="card__title">Quyosh</h3>
                  <img src="./images/quyosh.svg" alt="Quyosh" width="100%">
                  <time class="card__time quyosh">${data[i].times.quyosh}</time>
              </div>
              <div class="card">
                  <h3 class="card__title">Peshin</h3>
                  <img src="./images/peshin.svg" alt="Peshin" width="100%">
                  <time class="card__time peshin">${data[i].times.peshin}</time>
              </div>
              <div class="card">
                  <h3 class="card__title">Asr</h3>
                  <img src="./images/asr.svg" alt="Asr" width="100%">
                  <time class="card__time asr">${data[i].times.asr}</time>
              </div>
              <div class="card">
                  <h3 class="card__title">Shom</h3>
                  <img src="./images/shom.svg" alt="shom" width="100%">
                  <time class="card__time shom">${data[i].times.shom_iftor}</time>
              </div>
              <div class="card">
                  <h3 class="card__title">Xufton</h3>
                  <img src="./images/xufton.svg" alt="Xufton" width="100%">
                  <time class="card__time xufton">${data[i].times.hufton}</time>
              </div>
          </div>
          `;
          $(".weeks").appendChild(weekDay);
        }
        
      });
  });
};
renderData();
//-----------END RENDER CARDS-----------//

//-----------START RENDER TIME-----------//
async function renderDate(){
  const data = new Date();
  
  const monthNames = ["yanvar", "fevral", "mart", "aprel", "may", "iyun",
  "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"
];

  $(".date_f").innerHTML = `${data.getDate()}-${monthNames[data.getMonth()]} ${data.getFullYear()}-yil`;
  setInterval(()=>{
    const data = new Date();
    $(".date_s").innerHTML = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
  },1000);
} 
renderDate();
//-----------END RENDER TIME-----------//