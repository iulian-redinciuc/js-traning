let myButtons = [];
// [0,1,2].forEach(function(element, index, arr){
//     myButtons[index] = document.createElement("button");
//     myButtons[index].id = index;
//     myButtons[index].style.width = '100px';
//     myButtons[index].style.height = '100px';
    
// });

for (let i=0; i<3; i++){
    myButtons[i] = document.createElement("button");
    myButtons[i].id = i;
    myButtons[i].style.width = '100px';
    myButtons[i].style.height = '100px';
    
    document.body.appendChild(myButtons[i]);
    myButtons[i].addEventListener('click', function(element){
        console.log(i);
    });
}
console.log(i);
// document.body.addEventListener('click', function(element){
//     let response = document.getElementById('response');
//     response.innerHTML = null;
//     let para = document.createElement('p');
//     para.innerText = `I am button number ${element.target.id}`;
//     response.appendChild(para);
// });