(function(){
    let number = window.prompt('Bitte geben Sie Ihre Zahl an');

    let rndNumber = Math.round((Math.random()*5));

    console.log(`Number Match ${(rndNumber == number)}`)
})()