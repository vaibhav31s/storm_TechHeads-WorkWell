import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";


const data = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    
    const responses = await prisma.response.findMany({include:{
        question:true,
        user:true,
        form:true
    }});

    const u= await prisma.user.findMany();
    

          const users : { HR: any, Manager:any, Employee: any } = {"HR" : [] , "Manager" :[] , "Employee":[]};
    const attributes : any = {};
    const count : any = {};
    const forms : any = {};
    for(let x of  u){
        if(x.role == "HR") continue;
        if(x.role == "Manager"){
            users["Manager"].push(x);
        }
        else{
            users["Employee"].push(x);
        }
    }


    for(let x  of responses){
        let rating = parseInt(x.answer);
        for(let i = 0 ; i < x.question.type.length ; i++ ){
            let y : any = x.question.type[i];
            attributes[y] = (parseInt(attributes[y]) || 0) + rating;
            count[y] =  (parseInt(count[y]) || 0) + 1;
        }
    }
    let x :any;
    let y :any;
    for([x,y] of Object.entries(attributes)){
        attributes[x] = parseInt(y) / parseInt(count[x]);
    }
    const resData = {attributes ,  users , count};
    res.status(200).json({resData});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case "GET":
        data(req, res);
      break;
    case "POST":
        
      break;
    case "PATCH":
      break;
    case "DELETE":
      break;
    default:
      res.status(500).json({ message: "Method not allowed" });
      break;
  }
}
