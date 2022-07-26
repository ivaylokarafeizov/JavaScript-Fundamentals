function cats(array) {
  let catsArray = [];
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      return `${this.name}, age ${this.age} says Meow`;
    }
  }
  for (let element of array) {
    let [name, age] = element.split(" ");
    catsArray.push(new Cat(name, age));
  }
  for (let element of catsArray) {
    console.log(element.meow());
  }
}

cats(["Mellow 2", "Tom 5"]);
