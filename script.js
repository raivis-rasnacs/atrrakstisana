var rakstisanaSakusies = false;
var sekundes;
var taimeris;

function startTimer() {
  if (rakstisanaSakusies == false) {
    sekundes = 60;
    taimeris = setInterval(tikTak, 1000);
  }
  rakstisanaSakusies = true;
}

function tikTak() {
  sekundes = sekundes - 1;
  //console.log(seconds);
  if (sekundes == 0) {
    var text = document.getElementById("tekstaLauks").value;
    var words = text.split(" ");
    alert(words.length+" vārdi minūtē")
    clearInterval(taimeris);
  }
}