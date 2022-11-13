import { User } from "./User";
import { Vote } from "./Vote";

export class Post {
    _id: number;
    _title: string;
    _description: string;
    _imageUrl: string;
    _userPublication: User;
    _datePublication: Date;
    _vote: Vote;

    constructor(
        id: number,
        title: string,
        description: string = "",
        imageUrl: string,
        userPublication: User) {

        this._id = id;
        this._title = title;
        this._description = description;
        this._imageUrl = imageUrl;
        this._userPublication = userPublication;
        this._datePublication = new Date();
    }

    set vote(vote: Vote) {
        this._vote = vote;
    }
    get vote(): Vote{
        return this._vote;
    }
    set description(desc: string) {
        this._description = desc;
    }
}