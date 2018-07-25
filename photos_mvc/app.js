let imgSrcInput = document.getElementById("srcInput");
let imagesView = createListView(imagesModel, onDelete, onToggle);

document.getElementById("images").appendChild(imagesView);

document.getElementById("addImgBtn").addEventListener("click", function() {
    imagesModel.addImage(imgSrcInput.value);
    imgSrcInput.value = ""; //null
});

document.body.appendChild(createFooter(imagesModel));

function onToggle(indexToSelect) {
    imagesModel.toggleSelect(indexToSelect);
}

function onDelete() {
    imagesModel.removeImages();
}