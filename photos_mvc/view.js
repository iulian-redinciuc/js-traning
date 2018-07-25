function createListView(myModel, onDeleteCb, onToggleCb) {
    let div = document.createElement("div");

    div.addEventListener("click", function(e) {
        let elementClicked = e.target;

        if(elementClicked.tagName === "BUTTON") {
            onDeleteCb();
        }

        if(elementClicked.tagName === "IMG") {
            elementClicked.classList.add("selected");
            onToggleCb(Number(elementClicked.dataset["index"]));
        }
        
    });

    div.notify = function(imgList) {
        div.innerHTML = null;
        imgList.arr.forEach(function(src,index,arr) {
            let img = document.createElement("img");
            img.src = src;
            img.setAttribute("data-index", index);
            if(imgList.selected.indexOf(index) !== -1) {
                img.classList.add("selected");
            }
       
            div.appendChild(img);
        });

        if(imgList.selected.length !== 0) {
            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            div.appendChild(deleteBtn);
        }

    }

    myModel.subscribe(div);
    return div;    
}

function createFooter(myModel){
    let footer = document.createElement("footer");
    footer.notify = function(images){
        footer.innerHTML = `Exista ${images.arr.length}/${images.maxLen} imagini`;
        
        if(images.errorMsg !== undefined){
            let para = document.createElement("p");
            para.innerText = `${images.errorMsg}`;
            footer.appendChild(para);
        }
    }
    myModel.subscribe(footer);
    return footer;
}