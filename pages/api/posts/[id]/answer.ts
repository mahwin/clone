import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import { prisma } from ".prisma/client";
import { TrustProductsEntityAssignmentsContext } from "twilio/lib/rest/trusthub/v1/trustProducts/trustProductsEntityAssignments";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
    body: { answer },
  } = req;

  const newAnwser = await client.answer.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      post: {
        connect: {
          id: Number(id),
        },
      },
      answer,
    },
  });
  console.log(newAnwser);
  res.json({
    ok: true,
    answer: newAnwser,
  });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
