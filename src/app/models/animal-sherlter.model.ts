import { Address } from './address.model'

export class AnimalShelter {
    constructor(
        public id: string,

        public identityCode: string,

        public name: string,

        public emails: string[],

        public address: Address,

        public phones: string[],

        public password: string,

        public type: string,

        public subscribre: boolean,

        public images: string[],

        public information: string
    ) { }
}