import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../utils/db";

const gg = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const cost: Number = req.body.cost;
    const userId: any = req.body.userId;

    console.log(cost, userId);
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        points: {
          decrement: cost,
        },
      },
    });
    res.status(200).json({ message: "success" });
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
      gg(req, res);
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
