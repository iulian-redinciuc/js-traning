let AdressModel = (function () {
    let myAdresses = [];
    let myObservers = [];

    function notifySubscribers() {
        myObservers.forEach(function (observer) {
            if (typeof observer.notify === "function") {
                observer.notify(myAdresses);
            }
        });
    }

    return {
        addAdress: function (adress) {
            myAdresses.push(adress);
            notifySubscribers();
        },
        removeAdress: function (adress) {
            myAdresses = myAdresses.filter(function (currentAdress) {
                return adress !== currentAdress;
            })
            notifySubscribers();
        },
        subscribe(observer) {
            myObservers.push(observer);
        }
    }
}());