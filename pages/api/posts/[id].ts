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
  } = req;
  const post = await client.post.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
      _count: {
        select: {
          wondering: true,
          answers: true,
        },
      },
    },
  });
  res.json({
    ok: true,
    post,
  });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
