type Questions   = {
    id: string;
    title: string;
    type: string[];
    options: string[];
    form? : any;
    responses? : Response[];
    frontId? : string;

};
export default Questions;