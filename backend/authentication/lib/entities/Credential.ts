import { Email } from "./Email";

export class Credential {
    _email: Email;
    _password: string;
    _credentialType: string;

    constructor(email: string, password: string, credentialType: string) {
        if (isValid(password)) {
            throw new Error("Invalid password. Your password must contains only letter and numbers");
        }

        this._email = new Email(email);
        this._password = password;
        this._credentialType = credentialType;
    }

    get email(): string {
        return this._email._address;
    }
}

function isValid(password: string) {
    const passwordRegex = /^[a-zA-Z0-9_.-]*$/;
    return !passwordRegex.test(password);
}