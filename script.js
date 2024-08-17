//TEMPERATURE CONVERSION PROGRAM

const value = document.getElementById(`value`);
const toFahrenheit = document.getElementById(`toFahrenheit`);
const toCelcius = document.getElementById(`toCelcius`);
const result = document.getElementById(`response`);
let temp;

function convert(){
    temp = Number(value.value)

    if (toFahrenheit.checked){
        temp = temp * (9 / 5) + 32;
        result.textContent = temp.toFixed(1) + `°F`;
    }
    else if(toCelcius.checked){
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + `°C`;
    }
    else{
        result.textContent = `You have selected none`;
    }
}