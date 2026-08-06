import { User } from "./app.entitie"

export class aulaUser {
    public listUser: Array<User> =[];

    async create(User: User): Promise<void>{
        this.listUser.push(User);
    }
}