function append(character) {
    document.getElementById('display').value +=character;
}

function calculate() {
    try {
        document.getElementById('display').value =eval(document.getElementById('display').value);
    }  catch  {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value ='';
}

function playSound() {
    const sound =document.getElementById('clickSound');
    sound.currentTime = 0;
    sound.play();
}