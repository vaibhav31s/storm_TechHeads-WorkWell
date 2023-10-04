import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../utils/db";


const retrieve = async (req: NextApiRequest, res: NextApiResponse) => {
  try{
    const formId : any = req.query.id;
   const data = await prisma.form.findFirst({where : {id : formId} , include:{questions : true}});

   res.status(200).json({data});
  }
  catch(err){
    res.status(500).json({message:"INTERNAL SERVER ERROR"});
  }

}
const submit = async (req: NextApiRequest, res: NextApiResponse) => {
  
  try {
    const formId :any = req.query.id;
    // const x = JSON.parse(req.body)
    const { userId, questions, responses } = req.body;
    console.log("questions",questions)
    
    
    
    // Loop through questionIds and responses arrays
    for (let i = 0; i < questions.length; i++) {
      const questionId = questions[i].id;
      const responseText = responses[i]; // Assuming responses array matches questionIds
    
      // Create a response record for each question
      await prisma.response.create({
        data: {
          form: {connect: { id : formId }}, // Assuming you have formId
          user: {connect: { id : userId }},
          question: {connect: { id : questionId }},
          answer: responseText,
        },
      });
    }
    await prisma.user.update({
      where: {
        id: userId // Provide the specific userId to identify the user you want to update
      },
      data: {
        points : {
          increment:50
        },
        form: {
          connect: {
            id: formId // Provide the new formId you want to associate with the user
          }
        }
      }
    });
    res.status(200).json({ message: "Responses created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
    }
  };
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  switch (method) {
    case "GET":
      retrieve(req , res);
      break;
    case "POST":
      submit(req , res);
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
