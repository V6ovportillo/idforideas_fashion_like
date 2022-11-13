import { Email } from "./Email";

export class User {
    _fisrtName: string;
    _lastName: string;
    _email: Email;

    constructor(firstName: string, lastName: string, email: string) {
        if(isEmptyOrNull(firstName) || isEmptyOrNull(lastName)){
            throw new Error("You must fill your first and last name");
        }

        this._email = new Email(email);
        this._fisrtName = firstName.toLocaleLowerCase();
        this._lastName = lastName.toLocaleLowerCase();
    }

    get email(): string {
        return this._email._address;
    }
    get name(): string{
        return `${this._fisrtName} ${this._lastName}`
    }
}

function isEmptyOrNull(word: string) {
    return !word || word.trim().length === 0;
  }
  