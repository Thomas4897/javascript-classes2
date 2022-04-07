const { uuid } = require("uuidv4");

class DbObject {
  #creationDate;
  #lastModifiedDate;
  #lastModifiedEvents;
  #uuid;

  constructor() {
    this.#creationDate = new Date().getTime();
    this.#lastModifiedDate = new Date().getTime();
    this.#lastModifiedEvents = [this.#creationDate];
    this.#uuid = uuid();
  }

  get lastModifiedDate() {
    return this.#lastModifiedDate;
  }

  getLastModifiedEvents() {
    const getAll = this.#lastModifiedEvents;
    return getAll;
  }

  _setLastModified() {
    const newDate = new Date().getTime();
    this.#lastModifiedDate = newDate;
    this.#lastModifiedEvents.push(newDate);
  }

  formattedLastModifiedDate() {
    return new Date(this.#lastModifiedDate).toISOString();
  }

  get lastModifiedEvents() {
    return this.#lastModifiedEvents;
  }

  formattedLastModifiedEvents() {
    const readableEvents = this.#lastModifiedEvents.map((e) => {
      return new Date(e).toISOString();
    });
    return readableEvents;
  }

  get creationDate() {
    return this.#creationDate;
  }

  formattedCreationDate() {
    return new Date(this.#creationDate).toISOString();
  }

  get uuid() {
    return this.#uuid;
  }

  setUUID() {
    const id = uuid();
    this.#uuid = id;
    this._setLastModified();
  }
}

const myObject = new DbObject();
// #creationDate;
// #lastModifiedDate;
// #lastModifiedEvents;
// #uuid;
console.log(" ");
console.log("formattedCreationDate:", myObject.formattedCreationDate());
console.log(" ");

console.log("creationDate:", myObject.creationDate);
console.log(" ");

console.log("formattedLastModifiedDate:", myObject.formattedLastModifiedDate());
console.log(" ");

console.log("lastModifiedDate:", myObject.lastModifiedDate);
console.log(" ");

console.log(
  "formattedLastModifiedEvents:",
  myObject.formattedLastModifiedEvents()
);
console.log(" ");

myObject.setUUID();
console.log("uuid:", myObject.uuid);
console.log(" ");

console.log("lastModifiedDate:", myObject.lastModifiedDate);
console.log(" ");

console.log(
  "formattedLastModifiedEvents:",
  myObject.formattedLastModifiedEvents()
);
console.log(" ");
console.log("------------------------------------------------------------");

class User extends DbObject {
  _name;
  _age;
  _favoriteMovies;
  constructor(name, age, favoriteMovies) {
    super();
    this._name = name;
    this._age = age;
    this._favoriteMovies = [favoriteMovies];
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get favoriteMovies() {
    return this._favoriteMovies;
  }

  set name(newName) {
    this._name = newName;
    this._setLastModified();
  }

  set age(newAge) {
    this._age = newAge;
    this._setLastModified();
  }

  set favoriteMovies(newMovie) {
    this._favoriteMovies.push(newMovie);
    this._setLastModified();
  }
}

const myUser = new User("Thomas", 36, "Hellboy");

console.log("-> myUser:", myUser);
console.log("");
console.log(
  "-> Get User formattedLastModifiedDate:",
  myUser.formattedLastModifiedDate()
);
console.log("");
console.log(
  "-> Get User formattedLastModifiedEvents:",
  myUser.formattedLastModifiedEvents()
);
console.log("");
console.log("-> Get UUID:", myUser.uuid);
console.log("");
console.log("-> Get Name:", myUser.name);
console.log("");
console.log("-> Get Age:", myUser.age);
console.log("");
console.log("-> Get Favorite Movies:", myUser.favoriteMovies);
console.log("");
console.log("------------------------------------------------------------");

myUser.name = "Austin";
console.log("-> Get Updated Name:", myUser.name);
console.log("");
myUser.age = 40;
console.log("-> Get Updated Age:", myUser.age);
console.log("");
myUser.favoriteMovies = "Swap Thing";
console.log("-> Get Updated Favorite Movies:", myUser.favoriteMovies);
console.log("");
console.log(
  "-> Get User formattedLastModifiedDate:",
  myUser.formattedLastModifiedDate()
);
console.log("");
console.log(
  "-> Get User formattedLastModifiedEvents:",
  myUser.formattedLastModifiedEvents()
);
console.log("");
console.log("-> Get Updated User:", myUser);
console.log("");
