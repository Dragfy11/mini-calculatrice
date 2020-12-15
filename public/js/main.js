let egale = document.body.getElementsByClassName('fa-equals')
let input = document.getElementsByTagName('input')
let response1 = document.getElementById('response1')
let reponse

egale[0].addEventListener('click', function () {
    reponse = parseInt(input[0].value) + parseInt(input[1].value)
    response1.innerHTML = reponse

})
//---------------------exercice 1--------------------------------

let response2 = document.getElementById('response2')
let select = document.getElementsByTagName('select')


egale[1].addEventListener('click', function () {

    switch (select[0].value) {
        case "+":
            reponse = parseInt(input[2].value) + parseInt(input[3].value)
            response2.innerHTML = reponse
            console.log(response2)

            break;
        case "-":
            reponse = parseInt(input[2].value) - parseInt(input[3].value)
            response2.innerHTML = reponse

            break;

        case "*":
            reponse = parseInt(input[2].value) * parseInt(input[3].value)
            response2.innerHTML = reponse

            break;

        case "/":
            reponse = parseInt(input[2].value) / parseInt(input[3].value)
            response2.innerHTML = reponse

            break;


        default:
            break;
    }



})

//--------------------exercice 2---------------------------------

let response3 = document.getElementById('response3')
let operation;
let operateur = document.body.querySelectorAll('.fas')

for (let i = 5; i < 9; i++) {
    operateur[i].addEventListener('click', function () {
        operation = operateur[i].classList[1]
        


        
    })

}



egale[2].addEventListener('click', function () {

    switch (operation) {
        case "fa-plus":
            reponse = parseInt(input[4].value) + parseInt(input[5].value)
            response3.innerHTML = reponse
            console.log(response2)

            break;
        case "fa-minus":
            reponse = parseInt(input[4].value) - parseInt(input[5].value)
            response3.innerHTML = reponse

            break;

        case "fa-times":
            reponse = parseInt(input[4].value) * parseInt(input[5].value)
            response3.innerHTML = reponse

            break;

        case "fa-divide":
            reponse = parseInt(input[4].value) / parseInt(input[5].value)
            response3.innerHTML = reponse

            break;


        default:
            break;
    }


})

//--------------------------exercice 3-------------------------------------------

let button = document.getElementsByTagName('button')

console.log(input[6])




for (let i = 6; i < 7; i++) {
    input[i].addEventListener('click',function(){
        
            input[i].active = true
        
    })
    
}

for (let i = 8; i < 18; i++) {
    button[i].addEventListener('click',function(){
        console.log(button[i].innerHTML)
        input[i].value += parseInt(button[i].innerHTML)

    })
    
}
console.log(input[6])

//------------------------------exercice 4---------------------------------------
// Définir les variables
let div4 = document.querySelector('#exo-4');
let div4Inputs = div4.querySelectorAll("input")

    // Valeurs des inputs
let div4Value1 = "";
let div4Value2 = "";

    // Nombres
let divChiffre = div4.querySelector("#numbersExo4")
let chiffres = divChiffre.querySelectorAll(".m-1")

    // Opérations
let divoperateurs = div4.querySelector("#operatorsExo4")
let div4Operateurs = divoperateurs.querySelectorAll(".m-1")
let div4Operateur = "";

    // Egal
let div4Egal = div4.querySelector(".btn");
let div4reponse = div4.querySelector("#response4")


// définir l'opérateur.
div4Operateurs[0].value = "+"
div4Operateurs[1].value = "-"
div4Operateurs[2].value = "*"
div4Operateurs[3].value = "/"

// permet de définir l'opérateur du calcul. 
div4Operateurs.forEach(element => {
    element.addEventListener("click", function(){
        div4Operateur = this.value;
        return div4Operateur;
    })
})

// Définir les chiffres
chiffres.forEach((e, i) => {
    e.value = Number(chiffres[i].innerHTML);
});

// Soit input 1 soit input 2
for (let i = 0; i < chiffres.length; i++) {
    chiffres[i].addEventListener('click', function(){
        if(div4Operateur == ""){
            div4Inputs[0].value +=  chiffres[i].value;
            div4Value1 = Number(div4Inputs[0].value);
        }else{
            div4Inputs[1].value +=  chiffres[i].value;
            div4Value2 = Number(div4Inputs[1].value);
        }
    })
};

// Calcul
div4Egal.addEventListener("click", function(){
    switch (div4Operateur) {
        case "+":
            div4reponse.innerText = div4Value1 + div4Value2
            break;

        case "-":
            div4reponse.innerText = div4Value1 - div4Value2
            break;

        case "*":
            div4reponse.innerText = div4Value1 * div4Value2
            break;

        case "/":
            div4reponse.innerText = div4Value1 / div4Value2
            break;
    }
    div4Inputs[0].value = "";
    div4Inputs[1].value = "";
})
