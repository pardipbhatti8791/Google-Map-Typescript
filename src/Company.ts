import * as faker from 'faker'
import {Mappable} from "./CustomMap";

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number
    };
    color: string;

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
        this.color = "red"
    }

    markerContent(): string {
        return `
            <h1 style="color: ${this.color}">Company name: ${this.companyName}</h1>
            <h3>Company catchPrase: ${this.catchPhrase}</h3>
        `
    }
}