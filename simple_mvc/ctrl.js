let addressInput = document.getElementById("addressInput");
let addressView = createListView(AdressModel, onDelete);

document.getElementById("addresses").appendChild(addressView);

document.getElementById("addAddressBtn").addEventListener("click", function() {
    AdressModel.addAdress(addressInput.value);
    addressInput.value = ""; //null
});




function onDelete(addressToDelete) {
    AdressModel.removeAdress(addressToDelete);
}