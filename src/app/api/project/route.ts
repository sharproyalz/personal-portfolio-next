import prisma from "~/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await prisma.project.create({
      data: {
        ...body,
      },
    });

    return Response.json(result);
  } catch (err) {
    return Response.json({
      message: "Creating a new project failed",
      error: "500",
    });
  }
}

export async function GET(req: Request) {
  try {
    const result = await prisma.project.findMany();

    if (!result) {
      return Response.json({
        message: "Error: Project not found",
        status: 404,
      });
    }

    return Response.json(result);
  } catch (error) {
    console.error("Error fetching project:", error);
    return Response.json({
      message: "Error fetching project",
      status: 500,
    });
  }
}

export async function PUT(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id"); 
    const body = await req.json();

    const updatedBlog = await prisma.project.update({
      where: {
        id: id as string,
      },
      data: {
        ...body,
      },
    });

    return Response.json(updatedBlog);
  } catch (error) {
    console.error("Error updating project:", error);
    return Response.json({ message: "Error updating project", status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id"); 

    const deletedBlog = await prisma.project.delete({
      where: {
        id: id as string,
      },
    });

    return Response.json(deletedBlog);
  } catch (error) {
    console.error("Error updating project:", error);
    return Response.json({ message: "Error updating project", status: 500 });
  }
}