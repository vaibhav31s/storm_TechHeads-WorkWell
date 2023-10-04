import Form from "./Form";
type User = {
    id? : string;
    name : string;
    email : string;
    password : string;
    avatar? : string;
    role : string;
    form? : Form[];
    responses? : Response[];

}