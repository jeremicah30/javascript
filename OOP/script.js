//Person Constructor --Should always be capital at the beginning
function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

// const mai = new Person('Mai');


const mai = new Person('Mai', '1/30/1999');
console.log(mai.calculateAge());