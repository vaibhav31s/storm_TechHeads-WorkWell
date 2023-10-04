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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case "GET":
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
