document.getElementById('add-border').addEventListener('click', function() {
    const addBorder = document.getElementById('idContainer');
    addBorder.style.border = '5px solid black';
    addBorder.style.backgroundColor = 'green';
})

// document.getElementById('add-color').addEventListener('click', function() {
//     const addColor = document.getElementById('idContainer');
//     addColor.style.color = 'red';
//     addColor.style.fontSize = '50px';

// })

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'red';
    }
}

/* document.getElementById('addFriendFour').addEventListener('click', function() {
    const frd = document.getElementById('friendNumberFour');
    const frdDiv = document.createElement('div');
    frdDiv.classList.add('friend');
    frdDiv.innerHTML = `
    <h2 class="griend-name">friend-3</h2>
            <p>Nostrum explicabo libero iste non!</p>
    `
    idContainer.appenChild(frdDiv);
}); */

/*
document.getElementById('add-friedn').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friedDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
        <h2 class="griend-name">friend-3</h2>
            <p>Nostrum explicabo libero iste non!</p>
    `
})
*/
document.getElementById('add-four-friend').addEventListener('click', function() {

    //make a id 
    const container = document.getElementById('idContainer');
    // create a  dom 
    const friendDiv = document.createElement('div');

    // classList.add 
    friendDiv.classList.add('friend');


    friendDiv.innerHTML = `
    <h2 class="griend-name"> New friend</h2>
    <p>Nostrum explicabo libero iste non!</p>
    `;
    idContainer.appendChild(friendDiv);
});



//test 
/* 
document.getElementById('add-four-friend').addEventListener('click',function() {
    const container =document.getElementById('idContainer');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h2 class="griend-name">friend-3</h2>
    <p>Nostrum explicabo libero iste non!</p>
    `;
    idContainer.appendChild(friendDiv);
})
 */


//test-222