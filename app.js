var button = document.querySelector('button');
var hexNumerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', changeColor);

function changeColor(){
    var hexCode = '#';

    for (var i = 0; i < 6; i++){
        var hexValue = hexNumerals[Math.floor(Math.random() * hexNumerals.length)];
        hexCode += hexValue;
    }

    document.body.style.backgroundColor = hexCode;
    document.querySelector('span').innerHTML = 'Hex-Code: ' + hexCode;
}