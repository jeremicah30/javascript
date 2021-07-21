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
    function Person(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
        // this.calculateAge = function(){
        //     const diff = Date.now() - this.birthday.getTime();
        //     const ageDate = new Date(diff);
        //     return Math.abs(ageDate.getUTCFullYear() - 1970);
        // }
    };

    //Calculate age --transfer here intead inside of the Person Constructor
    Person.prototype.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    //Get FullName
    Person.prototype.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    };

    //Get Married
    Person.prototype.getMarried = function(newLastName){
        this.lastName = newLastName;
    }

    const mai = new Person('Mai', 'Blodet', '1/30/1999');

    console.log(mai);

    console.log(mai.getFullName());

    mai.getMarried('Padodots');
    console.log(mai.getFullName());