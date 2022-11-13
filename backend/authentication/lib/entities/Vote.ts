import { User } from "./User";

export class Vote {
    _user: User;
    _vote: boolean; 

    constructor(user: User, vote: boolean){
        this._user = user;
        this._vote = vote;
    }
}