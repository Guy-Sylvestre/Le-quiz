const form = document.querySelector("form-quizz");
let tableauResultats = [];
console.log("okkkkkkkkkkkkkkkkkk");

form.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]').value);

    for (i =1; i < 6; i++){
        tableauResultats.push(document.querySelector(`input[name="q${i}]"`).value)
    }
    console.log(tableauResultats);
})