import { Subject } from "rxjs";

export class UsersService
{
    userActivated: Subject<number> = new Subject();
}