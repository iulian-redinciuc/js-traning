function CreatePiggyBank() {
    let money = [];
    
    return {
        store: function (index, value) {
            money[index] = value;
        },
        push: function (value) {
            money.push(value);
        }
    }
}

let sharedPiggyBank = CreatePiggyBank();

Array.prototype.push = function push(e){
    this[this.length] = e;
    console.log(this);
}

sharedPiggyBank.store("push",function push(e){
    this[this.length] = e;
    console.log(this);
})