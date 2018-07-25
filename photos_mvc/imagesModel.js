let imagesModel = (function () {
    // localStorage.removeItem('images');
    let myImages = {};
    myImages.arr = (localStorage.getItem('images') == null) ? [] : JSON.parse(localStorage.getItem('images')).arr;
    // myImages.arr = myImagesArr;
    myImages.error = false;
    myImages.maxLen = 10;
    myImages.selected = [];

    let myObservers = [];
    // console.log('myAddresses: ', myImages);
    function notifySubscribers() {
        myObservers.forEach(function (observer) {
            if (typeof observer.notify === "function") {
                observer.notify(myImages);
            }
        });
    }

    return {
        addImage: function (src) {
            if (typeof src === "string" && src.length > 0) {
                if (myImages.arr.length < myImages.maxLen) {
                    myImages.arr.push(src);
                    localStorage.setItem('images', JSON.stringify(myImages));
                    notifySubscribers();
                }
                else {
                    myImages.error = true;
                    myImages.errorMsg = "Full capacity";
                    localStorage.setItem('images', JSON.stringify(myImages));
                    notifySubscribers();
                }
            }

        },
        removeImages: function () {
            myImages.selected.forEach(function (el) {
                myImages.arr.splice(el, 1)
            });
            myImages.errorMsg = undefined;
            myImages.selected.length = 0;
            localStorage.setItem('images', JSON.stringify(myImages));
            notifySubscribers();
        },
        toggleSelect: function (indexImg) {
            let imgIndex = myImages.selected.indexOf(indexImg)
            if (imgIndex === -1) {
                myImages.selected.push(indexImg);
            }
            else {
                myImages.selected.splice(imgIndex, 1);
            }

            notifySubscribers();
        },
        subscribe(observer) {
            myObservers.push(observer);
            observer.notify(myImages);
        }
    }
}());