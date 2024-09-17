// first we need to create a stage
var container = document.querySelector('#canvasContainer');
const originalWidth = container.clientWidth;
const originalHeight = container.clientHeight;
var stage = new Konva.Stage({
    container: container,
    width: originalWidth,
    height: originalHeight

});

// then create layer
var layer = new Konva.Layer();
/*
// create our shape
var circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 120,
    fill: 'grey',
    stroke: 'black',
    strokeWidth: 2
});
layer.add(circle);
*/
let simpleText = new Konva.Text({
    x: stage.width() / 2,
    y: stage.height() / 2,
    text: 'Tu texto aquí!',
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: '#334cff',
    draggable: true,
});
// centrado del texto
simpleText.offsetX(simpleText.width() / 2);
simpleText.offsetY(simpleText.height() / 2);
layer.add(simpleText);

stage.add(layer);

layer.draw();


function cambiarColor() {
    simpleText.fill("red");
    layer.draw();
}



textarea = document.getElementById("texto");

textarea.addEventListener('keyup', function (e) {
    simpleText.text(textarea.value);
    // centrado del texto
    simpleText.offsetX(simpleText.width() / 2);
    simpleText.offsetY(simpleText.height() / 2);
});



const colorPicker = document.getElementById("textColor");

colorPicker.addEventListener('change', (e) => {
    simpleText.fill(e.target.value);
    layer.draw();
}, false);

function addMarco(marco) {

    if (stage.find('#marco1').length != 0) {
        stage.find('#marco1')[0].destroy();
    }

    var imageObj = new Image();
    imageObj.onload = function () {
        var marco1 = new Konva.Image({
            x: stage.width() / 2 - 250,
            y: stage.height() / 2 - 250,
            image: imageObj,
            width: 500,
            height: 500,
            id: 'marco1',
        });

        // add the shape to the layer
        layer.add(marco1);

        // muevo el texto al frente
        simpleText.moveToTop();
    };
    if (marco == 1) {
        imageObj.src = 'imgs/marco1.png';
    } else if (marco == 2) {
        imageObj.src = 'imgs/marco2.png';
    } else if (marco == 3) {
        imageObj.src = 'imgs/marco3.png';
    } else {
        if (stage.find('#marco1').length != 0) {
            stage.find('#marco1')[0].destroy();
        }
    }


}

function updateFontSize(value) {
    simpleText.fontSize(value);
    // centrado del texto
    simpleText.offsetX(simpleText.width() / 2);
    simpleText.offsetY(simpleText.height() / 2);
}

function addFondo(value) {
    // stage.container().style.backgroundColor = 'blue' ;
    switch (value) {
        case 1:
            stage.container().style.backgroundImage = "url('/pj/imgs/paredMadera.jpg')";
            break;
        case 2:
            stage.container().style.backgroundImage = "url('/pj/imgs/paredPiedra.jpg')";
            break;
        case 3:
            stage.container().style.backgroundImage = "url('/pj/imgs/paredLadrillo.jpg')";
            break;
        default:
            stage.container().style.backgroundImage = "";
    }


}