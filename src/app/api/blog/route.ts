import prisma from "~/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await prisma.blog.create({
      data: {
        ...body,
      },
    });

    return Response.json(result);
  } catch (err) {
    return Response.json({ message: "Sending message failed", error: "500" });
  }
}
