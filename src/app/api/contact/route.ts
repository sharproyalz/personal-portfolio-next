import prisma from "~/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await prisma.contact.create({
      data: {
        ...body,
      },
    });

    return Response.json(result);
  } catch (err) {
    return Response.json({ message: "Sending message failed", error: "500" });
  }
}

export async function GET(req: Request) {
  try {
    const result = await prisma.contact.findMany();

    if (!result) {
      return Response.json({
        message: "Error: Contact not found",
        status: 404,
      });
    }

    return Response.json(result);
  } catch (error) {
    console.error("Error fetching contact:", error);
    return Response.json({
      message: "Error fetching contact",
      status: 500,
    });
  }
}
