import { Subject } from "rxjs/Subject";

export class UsersService
{
    userActivated: Subject<number> = new Subject();
}