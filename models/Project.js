export default class Project {
  #_name;
  #_images = {};
  #_description;
  #_projectLeaders = {};
  #_collaborators = [];
  #_links = {};
  #_startDate;
  #_endDate;
  constructor(name) {
    this.#_name = name;
  }
  addCollaborator(collaborator) {
    this.#_collaborators.push(collaborator);
  }
  addLinks(name, url) {
    this.#_links[name] = url;
  }
  addImage(name, path) {
    this.#_images[name] = path;
  }
  addProjectLeadership(role, collaborator) {
    this.#_projectLeaders[role] = collaborator;
  }
  toJSON() {
    return {
      name: this.#_name,
      images: this.#_images,
      description: this.#_description,
      projectLeaders: this.#_projectLeaders,
      collaborators: this.#_collaborators,
      links: this.#_links,
      startDate: this.#_startDate,
      endDate: this.#_endDate
    };
  }

  get images() {
    return this.#_images;
  }

  set images(value) {
    this.#_images = value;
  }

  get description() {
    return this.#_description;
  }

  set description(value) {
    this.#_description = value;
  }

  get collaborators() {
    return this.#_collaborators;
  }

  set collaborators(value) {
    this.#_collaborators = value;
  }

  get links() {
    return this.#_links;
  }

  set links(value) {
    this.#_links = value;
  }

  get startDate() {
    return this.#_startDate;
  }

  set startDate(value) {
    this.#_startDate = value;
  }

  get endDate() {
    return this.#_endDate;
  }

  set endDate(value) {
    this.#_endDate = value;
  }
  get projectLeadership() {
    return this.#_projectLeaders;
  }

  set projectLeadership(value) {
    this.#_projectLeaders = value;
  }
}
