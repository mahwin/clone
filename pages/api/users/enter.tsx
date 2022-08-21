import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";
import withHandler from "../../../libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  return res.status(200).end();
}

// req.body는 req의 인코딩을 기준으로 인코딩된다
// req.body.email하면 Undefined뜸

export default withHandler("POST", handler);
