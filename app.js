function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(res => {
        res.json().then(data => {
            console.log(data.slip.advice);
            console.log(data.slip.id);
        })
    }).catch(err => {
        console.log(err);
    });
}

getAdvice();