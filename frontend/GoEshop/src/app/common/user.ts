export class User {
    username: string;
    name: string;
    lastName: string;
    password: string;
    enabled: boolean;
    role_username: string;


    constructor(username: string, name: string, lastName: string, password: string){
        this.username = username;
        this.name = name;
        this.lastName = lastName;
        this.password = password;
        this.enabled = true;
        this.role_username = username;
    }
}

