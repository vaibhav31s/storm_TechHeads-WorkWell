import  Questions  from "./Questions";
type Form = {
    id: string;
    title: string;
    description: string;
    questions: Questions[];
    cc : string[];
    responses? : Response[];
    User : any;
    userId : string;

};

export default Form;