var audio = new audio(emis);


var play = document.getElementById(play);
play.addEventListener('click', function () {
    audio.play;
}, false);

var pausa = document.getElementById(pausa)
pausa.addEventListener('click', function(){
    audio.pausa;
}, false);

var volumen = document.getElementById(volumenarriba)
volumenarriba.addEventListener('change', function(){
    audio.volumenarriba = parseFloat(this.value/10);

},false);



var volumen = document.getElementById(volumenabajo)
volumenabajo.addEventListener('change', function(){
    audio.volumenabajo = parseFloat(this.value/10);
},false);



