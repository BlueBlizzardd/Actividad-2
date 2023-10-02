const button = document.querySelector(".button");
const capital = document.getElementById("capital");
const result = document.querySelector(".result");

button.addEventListener("click", (e) => {
    e.preventDefault();
 
    console.log(capital.value);
    if(capital.value !== "") result.innerHTML = `El interes final es ${(parseFloat(capital.value)+2750)*0.15}`;
    else result.innerHTML = 'El campo de Capital Inicial tiene que estar llenado.';
})