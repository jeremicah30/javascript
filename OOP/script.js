//CONSTRUCTORS AND THIS KEYWORD
    // //Person Constructor --Should always be capital at the beginning
    // function Person(name, dob) {
    //     this.name = name;
    //     this.birthday = new Date(dob);
    //     this.calculateAge = function(){
    //         const diff = Date.now() - this.birthday.getTime();
    //         const ageDate = new Date(diff);
    //         return Math.abs(ageDate.getUTCFullYear() - 1970);
    //     }
    // };

    // // const mai = new Person('Mai');


    // const mai = new Person('Mai', '1/30/1999');
    // console.log(mai.calculateAge());


//PROTOTYPES
    // function Person(firstName, lastName, dob) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.birthday = new Date(dob);
    //     // this.calculateAge = function(){
    //     //     const diff = Date.now() - this.birthday.getTime();
    //     //     const ageDate = new Date(diff);
    //     //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    //     // }
    // };

    // //Calculate age --transfer here intead inside of the Person Constructor
    // Person.prototype.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // };

    // //Get FullName
    // Person.prototype.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // };

    // //Get Married
    // Person.prototype.getMarried = function(newLastName){
    //     this.lastName = newLastName;
    // }

    // const mai = new Person('Mai', 'Blodet', '1/30/1999');

    // console.log(mai);

    // console.log(mai.getFullName());

    // mai.getMarried('Padodots');
    // console.log(mai.getFullName());


//PROTOTYPES INHERITANCE
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };

    //Greetings 
    Person.prototype.greetings = function() {
        return `Hi ${this.firstName} ${this.lastName}`;
    };

    const efraim = new Person('Efraim', 'Patakla');

    //Customer Constructor --inherit
    function Customer(firstName, lastName, phone, membership) {
        Person.call(this, firstName, lastName,); //call functions
        this.phone = phone;
        this.membership = membership;
    };

    //Inherit Prototype
    Customer.prototype = Object.create(Person.prototype);

    //Make customer.prototype return customer -- make customer a constructor
    Customer.prototype.constructor = Customer;

    //Create a customer 
    const customer1 = new Customer('Epop', 'Boldet', '0909909090', 'VIP')


    console.log(customer1);

    //Customer greetings --Override a greetings
    Customer.prototype.greetings = function(){
        return `Hi ${this.firstName} ${this.lastName}! yeaaahhhhhyowwwwwww `
    }
    
    console.log(customer1.greetings());