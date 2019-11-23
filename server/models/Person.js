export default class Person {
  #_firstName;
  #_lastName;
  #_images = {};
  #_sites = {};
  constructor(firstName, lastName) {
    this.#_firstName = firstName;
    this.#_lastName = lastName;
  }
  addImage(description, url) {
    this.#_images[description] = url;
  }

  addSite(name, url) {
    this.#_sites[name] = url;
  }

  toJSON() {
    return {
      firstname: this.#_firstName,
      lastname: this.#_lastName,
      images: this.#_images,
      sites: this.#_sites
    };
  }

  fullname() {
    return this.#_firstName + " " + this.#_lastName;
  }

  get firstName() {
    return this.#_firstName;
  }

  set firstName(value) {
    this.#_firstName = value;
  }

  get lastName() {
    return this.#_lastName;
  }

  set lastName(value) {
    this.#_lastName = value;
  }

  get images() {
    return this.#_images;
  }

  set images(value) {
    this.#_images = value;
  }

  get sites() {
    return this.#_sites;
  }

  set sites(value) {
    this.#_sites = value;
  }
}
