import { NextApiRequest, NextApiResponse } from "next";
// import { prisma } from "../../../utils/db";

const hello = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, avatar } = req.body;
    
    res.status(200).json("user");
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
      hello(req, res);
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
