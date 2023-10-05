import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../utils/db";


const upload = async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    const {postId} = req.body;

    const post = await prisma.Post.update({
        where : {
            id : postId
        },
        data:{
            likes :{
                increment : 1
            }
        }
    })
    res.status(200).json({Message:"Successfull"})
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
