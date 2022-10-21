
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

  $("#select").addEventListener("change", (e)=>{
    fetch(API_URL + "day?region=" + $("#select").value)
    .then((res) => res.json())
    .then((data) => {
      $(".tong").innerHTML = data.times.tong_saharlik;
      $(".quyosh").innerHTML = data.times.quyosh;
      $(".peshin").innerHTML = data.times.peshin;
      $(".asr").innerHTML = data.times.asr;
      $(".shom").innerHTML = data.times.shom_iftor;
      $(".xufton").innerHTML = data.times.hufton;
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