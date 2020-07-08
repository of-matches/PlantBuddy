export class Plant {
  species: string;
  name: string;
  location: string;
  habitat: string;

  constructor(species: string, name: string, location: string, habitat: string) {
    this.species = species;
    this.name = name;
    this.location = location;
    this.habitat = habitat;
  }
}