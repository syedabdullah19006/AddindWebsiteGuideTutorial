const intro = introJs();

intro.setOptions({
    steps: [
        {
            element: '#introduction',
            intro: 'Welcome to our new website! Let\'s take a tour!'
        },
        {
            element:'#step-one',
            intro: 'Please read this! Is very important.'
        },
        {
            element:'#step-two',
            intro: 'Click here to Register!'
        },

    ]
})
document.querySelector('.start-steps').addEventListener('click',function(){
    intro.start();
})

intro.start();