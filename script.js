window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition  = new Recognition();
recognition.interimResults =true;
var p = documnet.createElement('p');
var words =documnet.querySelector('.words');
words.appendChild(p);
recognition.addEventListener('result',function(e){
   var transcript = Array.form(e.results)
       .map(function (result) {
           return result[0];
       })
       .map(function (result) {
           return result.transcript;
       }).join('');
   p.textContent =transcript;
    if(e.result[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }
});
recognition.addEventListener('end',recognition.start);
recognition.start();