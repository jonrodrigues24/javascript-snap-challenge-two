let theArray = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah'];


theArray.forEach(createElement)


function createElement(data){

    const newCell = document.createElement('div');
    newCell.classList.add("name");

    const paragraph = document.createElement('p');
    const node = document.createTextNode(data);

    paragraph.appendChild(node);


}