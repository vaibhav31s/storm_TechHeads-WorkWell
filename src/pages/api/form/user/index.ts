import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../utils/db";




const ret = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const user : any = req.body.userId;

      const response = await prisma.form.findMany();
      const userForms = await prisma.user.findFirst({where:{
        id : user
      },
       
    select:{
        form:true
    }})
    let out : any = [];
      let x : any , y :any;
      for(x of  response){
         let check : any = false;
         userForms?.form.map(f => {
            if(f.id === x.id) {
                check =true
            }
         })
         if(!check){
            out.push(x);
         }
      }

      
     
      res.status(200).json({forms : out});
    } catch (err) {
      console.error(err);
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
      break;
    case "POST":
      ret(req , res);
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
