let theArray = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah'];



createElement();
namesMap();

function createElement(){

    let myList = document.getElementById('here')

    theArray.forEach(name => {
        let li = document.createElement('li');
        li.innerText = name;

        myList.appendChild(li);

    })

    // const newCell = document.createElement('div');
    // newCell.classList.add("name");
    //
    // const paragraph = document.createElement('p');
    // const node = document.createTextNode(data);
    //
    // paragraph.appendChild(node);


}



function namesMap(){
    let mySection = document.getElementById('map');


    theArray.map(name => {
        console.log(name)
        mySection.innerHTML += "<p>" + name + "</p>"
    })
}