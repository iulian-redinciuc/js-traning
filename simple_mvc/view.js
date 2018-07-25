function createListView(myModel, onDeleteCb) {
    let ul = document.createElement("ul");

    ul.addEventListener("click", function(e) {
        let elementClicked = e.target;

        if(elementClicked.dataset["address"]) {
            onDeleteCb(elementClicked.dataset["address"]);
        }
        
    });

    ul.notify = function(addressList) {
        ul.innerHTML = null;
        addressList.forEach(function(address) {
            let li = document.createElement("li");
            li.innerText = address;

            let deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("data-address", address);
            deleteBtn.innerText = "Delete";


            li.appendChild(deleteBtn);
            ul.appendChild(li);
        });
    }

    myModel.subscribe(ul);
    return ul;

    
}
