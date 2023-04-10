import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {


    goodName(user: { name: string }): boolean {
        console.log(user.name === "toto");

        if (user.name === "toto") {
            return true;
        }
        return false;
    }
}