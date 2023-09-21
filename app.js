const dice = document.querySelector('.dice');

function getAdvice() {
    const adviceId = document.querySelector('.advice-id');
    const adviceText = document.querySelector('.advice-textQ');

    fetch('https://api.adviceslip.com/advice').then(res => {
        res.json().then(data => {
            adviceId.textContent = ('ADVICE #' + data.slip.id);
            adviceText.innerHTML = data.slip.advice; 
            console.log(data.slip.advice);
            console.log(data.slip.id);
        })
    }).catch(err => {
        console.log(err);
    });
}

dice.addEventListener('click', () => {
    getAdvice();
})

getAdvice();