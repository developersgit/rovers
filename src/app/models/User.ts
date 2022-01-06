export class User {
    private id: number;
    private email: string;
    private username: string;
    private fullname: string;

    constructor(email: string, userName: string, fullName: string, id?: number) {
        this.id = id ? id : 0; 
        this.email = email;
        this.username = userName;
        this.fullname = fullName;
    }
    
}
