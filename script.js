var rakstisanaSakusies = false;
var seconds;
var taimeris;

function startTimer() {
  if (rakstisanaSakusies == false) {
    seconds = 60;
    taimeris = setInterval(tikTak, 1000);
  }
  rakstisanaSakusies = true;
}

function tikTak() {
  seconds = seconds - 1;
  console.log(seconds);
  if (seconds == 0) {
    var text = document.getElementById("tekstaLauks").value;
    var words = text.split(" ");
    alert(words.length+" vārdi minūtē")
    clearInterval(taimeris);
  }
}