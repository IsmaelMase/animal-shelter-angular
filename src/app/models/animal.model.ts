import { AnimalShelter } from "./animal-sherlter.model";

export class Animal {
    constructor(
        public id: string,

        public name: string,

        public breed: string,

        public specie: string,

        public size: string,

        public age: string,

        public weight: string,

        public urgent: boolean,

        public dificult: boolean,

        public data: string,

        public diseases: string,

        public images: string[],

        public state: boolean,

        public subscribe: boolean,

        public animalShelter
    ) { }
}