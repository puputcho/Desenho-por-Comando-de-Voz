x = '';
y = '';
circle = '';
retangle = '';
reconhecerFala = window.webkitSpeechRecognition;
reconhecer = new reconhecerFala();
function start(){
    document.getElementById('status').innerHTML = 'Iniciando Reconhecimento <br> Fale "círculo" ou "retângulo" <br><br>'
    reconhecer.start()
    
}
reconhecer.onresult = function (event) {
    console.log(event);
    var resultado = event.results[0][0].transcript;
    console.log(results);   
    document.getElementById('status').innerHTML = 'Comando identificado: ' + resultado;
    x = Math.floor(Math.random());
    y = Math.floor(Math.random());
    if (resultado=='círculo') {
        document.getElementById('status').innerHTML = 'Desenhando: "' + resultado + '"...';
        circle = 'true';
    }
    if (resultado=='retângulo') {
        document.getElementById('status').innerHTML = 'Desenhando: "' + resultado + '"...';
        retangle = 'true';
    }
}
function setup() {
    canvas = createCanvas(900, 600);
    canvas.center();
}
function draw() {
    if (circle == 'true') {
        radius = Math.floor(Math.random());
        circle(x, y, radius);
        document.getElementById('status').innerHTML = 'A missão está completa';
        circle = ''
    }
    if (retangle == 'true') {
        height = Math.floor(Math.random());
        width = Math.floor(Math.random());
        rect(x, y, height, width);
        document.getElementById('status').innerHTML = 'A missão está completa';
        
        retangle = '';
    }
}