import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const attributes = ["Leadership" , "Communication" , "Recognition and Rewards" , "Career Development" , "Work Environment" , "Job Satisfaction"];
const data = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    
    const responses = await prisma.response.findMany({include:{
        question:true,
        user:true,
        form:true
    }});

    const u= await prisma.user.findMany();
    
    
    res.status(200).json({responses});
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
        data(req, res);
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
