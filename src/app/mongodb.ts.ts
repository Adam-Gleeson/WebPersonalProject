export interface MongodbTs {
    Name:string;
    Gender:string;
    Email:string;
}

export class NewUser implements MongodbTs {
    Name!:string;
    Gender!:string;
    Email!:string;

    constructor(Name:string,  Gender:string, Email:string){
        this.Name = Name;
        this.Gender = Gender;
        this.Email = Email;
    }
}
