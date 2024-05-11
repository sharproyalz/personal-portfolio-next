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
    return Response.json({
      message: "Creating a new blog failed",
      error: "500",
    });
  }
}

export async function GET(req: Request) {
  try {
    const result = await prisma.blog.findMany();

    if (!result) {
      return Response.json({
        message: "Error: Blog not found",
        status: 404,
      });
    }

    return Response.json(result);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return Response.json({
      message: "Error fetching blog",
      status: 500,
    });
  }
}

export async function PUT(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id"); 
    const body = await req.json();

    const updatedBlog = await prisma.blog.update({
      where: {
        id: id as string,
      },
      data: {
        ...body,
      },
    });

    return Response.json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return Response.json({ message: "Error updating blog", status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id"); 

    const deletedBlog = await prisma.blog.delete({
      where: {
        id: id as string,
      },
    });

    return Response.json(deletedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return Response.json({ message: "Error updating blog", status: 500 });
  }
}
