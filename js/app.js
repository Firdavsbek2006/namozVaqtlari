
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

function renderOptions(){
  regions.forEach(()=>{
    $("#select").addEventListener("change", (e)=>{
      $(".mintaqa").innerHTML = e.target.value;
    })
  });
};
renderOptions()

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

async function renderDate(){
  const data = new Date();
  
  $(".date_f").innerHTML = `${data.getDate()}-sana ${data.getMonth()}-oy ${data.getFullYear()}-yil`;
  
  setInterval(()=>{
    const data = new Date();
    $(".date_s").innerHTML = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
  },1000);
} 
renderDate();