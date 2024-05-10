"use client";

export default function PrismaExample() {
  const host = "/api/blog";

  const sendContact = async () => {
    try {
      const projectResponse = await fetch(`${host}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          image: "",
          imageId: "",
          month: 1,
          year: 2024,
          title: "Sample Project",
        }),
      });

      const projectData = await projectResponse.json();
      console.log("New project:", projectData);
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => sendContact()}
        className="bg-primary p-4"
      >
        Send message
      </button>
    </>
  );
}
