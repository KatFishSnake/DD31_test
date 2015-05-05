document.getElementsByTagName("body").background = "green";

function Person(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age =age;
}

var andre = new Person("Andre", "Kuznetcov", 21);
andre.prototype.religion = "None.";

console.log("Hello my dear " + andre.name +" "+ andre.surname +" of "+ andre.age + "years old, religiously he is " + andre.religion);