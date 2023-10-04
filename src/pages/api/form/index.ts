import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const formGen = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Creating Forms //
    const {userId , title , description , questions ,cc} = req.body;

    const createdForm = await prisma.form.create({
      data: {
        title: title,
        description: description,
        cc: cc,
      }
    });

    console.log(createdForm);

    for(let ques of questions){
      await prisma.question.create({data:{
        title:ques.title,
        type:ques.type,
        options:ques.options,
        form : {
          connect:{
            id : createdForm.id
          }
        }
      }})
    }

    res.status(200).json({message:"Form Created"});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const ret = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    
    const response = await prisma.user.findMany({select:{form : true}});
    const myMap = new Map<any, any>();

    const arr : any = []

    let x : any;
    for(x of response){
        x.form.map((f : any) => {
          if(myMap.has(f.id) === false){
            myMap.set(f.id , 1);
            arr.push(f);
          }
          else myMap.set(f.id , parseInt(myMap.get(f.id)) + 1);
        })
    }

    let out : any = [];
    for(x of arr){
      out.push({x , freq : myMap.get(x.id)})
    }
    
    res.status(200).json({forms : out});
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
      ret(req , res)
      break;
    case "POST":
      formGen(req, res);
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
