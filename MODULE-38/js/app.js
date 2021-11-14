const goToPicnic = () => {
    alert('Are you going to picnic')
}

const askFriend = () => {
    const response = confirm('Are you sure!!!');
    console.log(response);
    if (response === true) {
        alert('Give a pay tour const???');

    } else {
        console.log('DHM');
    }
}

const askName = () => {
    const isName = prompt('what is your name');
    console.log(isName);
}