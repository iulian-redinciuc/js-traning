/** Implicit binding */
let foo = {
    name: "Foo",
    sayHello: function(param = "God!") {
        console.log(`Hello ${this.name}. I am ${param}`);
    }
}
let bar = {
    name: "Bar",
    sayByeBye: function() {
        console.log(`Bye bye ${this.name}`);
    }
}

bar.sayHello = foo.sayHello;

foo.sayHello(); // Hello Foo
bar.sayHello(); // Hello Bar

/** Explicit binding */

bar.sayHello.apply(foo); // Hello Foo
bar.sayHello.apply(foo, ["The Devil"]); // Hello Foo
bar.sayHello.call(foo, "The Devil"); // Hello Foo

/** Explicit binding using "bind"  */
foo.sayByeBye = bar.sayByeBye.bind(bar);
foo.sayByeBye(); // Bye bye Bar!


let baz = {
    name: "Baz",
    bazSetTimout: function() {
        
        function onTimeout() {
            console.log(this.name);
        }

        //    console.log(this);
        setTimeout(onTimeout.bind(this), 2000);

    }
}
baz.bazSetTimout();

/** "new" keyword */
function Pet(name, age) {
    this.name = name;
    this.age= age;

    setTimeout(() => {
        this.name = `Old - ${this.name}`;
    }, 5000);
}

Pet.prototype.sayHello = function() {
    console.log(`${this.name} says hello!`);
}




let bob = new Pet("Bob", 10);
bob.sayHello();

let bill = new Pet("Bill", 10);
bill.sayHello();



/** ARROW functiions don't have their "this" */
let baz = {
    name: "Baz",
    bazSetTimout: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 2000);
    }
}
