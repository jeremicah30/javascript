//OBJECT.CREATE
    // const personPrototypes = {
    //     greetings: function(){
    //         return `Hi ${this.firstName} ${this.lastName}`;
    //     },
    //     getMarried: function(newLastName){
    //         this.lastName = newLastName;
    //     }
    // };

    // const mai = Object.create(personPrototypes);
    // mai.firstName = 'Mai';
    // mai.lastName = 'Leecup';
    // mai.age = 22;

    // mai.getMarried('Kim');
    // console.log(mai.greetings());

    // const eppy = Object.create(personPrototypes,{
    //     firstName: {value: 'Efraim'},
    //     lastName: {value: 'Gabby'},
    //     age: {value: 23}
    // });


    // console.log(eppy.greetings());
    // console.log(eppy);

//ES6 Classes
    // class Person {
    //     constructor(firstName, lastName, dob){
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.birthday = new Date(dob);
    //     }

    //     greetings(){
    //         return `Hi ${this.firstName} ${this.lastName}`;
    //     }

    //     calculateAge(){
    //         const diff = Date.now() - this.birthday.getTime();
    //         const ageDate = new Date(diff);
    //         return Math.abs(ageDate.getUTCFullYear() - 1970);
    //     }

    //     getMarried(newLastName) {
    //         this.lastName = newLastName;
    //     }
    // };

    // const mai = new Person('Mai', 'Leecup', '1/30/1999');
    
    // mai.getMarried('Kim');
    // console.log(mai);


//Inheritance in ES6
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        greetings(){
            return `Hi, How are you ${this.firstName} ${this.lastName}`;
        }
    }

    class Customer extends Person {
        constructor (firstName, lastName, phone, membership){
            super(firstName, lastName); // call

            this.phone = phone;
            this.membership = membership;
        }
    }

    const jonel = new Customer('Jonel', 'Salenga', '090000000', 'Super-VIP');

    console.log(jonel);
