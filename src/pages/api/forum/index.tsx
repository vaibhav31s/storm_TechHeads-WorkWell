import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const data  = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
  
      const d = await prisma.Post.findMany({
        orderBy: {
        date: 'asc'
      }});
      res.status(200).json(d);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    }
  };
const upload = async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    const {title , description , tagged , userId} = req.body;

    const z = await prisma.Post.create({data:{
        title , description ,tagged, user  : {
            connect:{
                id : userId
            }
        }
    }})
    
    res.status(200).json(z)
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
        upload(req, res);
        
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
