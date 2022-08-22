import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withIronSessionApiRoute } from "iron-session/next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.session);
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
    include: { user: true },
  });
  if (!exists) res.status(404).end();
  console.log(exists);
  res.status(200).end();
}
export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrot",
  password: "sadasdadasdsadsadwqsaddsads12312312312392183912381293812dqwdqdq",
});

//withIronSessionApiRoute으로 함수를 감싸면 요청 객체 안에 요청하는 세션을 자동으로 만들어줌
//평범한 API를 만들고 withIronSessionApiRoute으로로 감싸면 IRON Session이 요청 객체에 REQ.session.user를 담아 보내준다
