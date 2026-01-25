const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((buttons) => {
    console.log(buttons);
    buttons.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        // Using If Else Iteration
        /* if (e.target.id === 'grey') {
          body.style.backgroundColor = 'grey'; // write like this to change color
        } else if (e.target.id === 'white') {
          body.style.backgroundColor = e.target.id; // write like this also its professional
        } else if (e.target.id === 'blue') {
          body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'yellow') {
          body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'purple') {
          body.style.backgroundColor = e.target.id;
        } else {
          console.log('Breck');
        } */

        // Using Switch Statement
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey'
                break;
            case 'white':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
            default:
                console.log('Break');
                break;
        }
    })
})