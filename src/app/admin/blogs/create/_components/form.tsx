"use client";

import { useState } from "react";

export function ProjectForm() {
  const [text, setText] = useState(``);

  return (
    <>
      <form className="mx-auto max-w-screen-lg px-12">
        <div className="mb-[2rem] text-center text-[3rem] text-gray">
          Create Blog
        </div>
        <div className="flex flex-col gap-8">
          {/* Image */}
          <div className="flex w-full flex-col gap-4">
            <div className="flex h-80 w-full items-center justify-center text-2xl dark:bg-card">
              Your article banner
            </div>
            <label
              htmlFor="image"
              className="w-full rounded-lg border border-secondary px-[1rem] py-[0.5rem] text-center font-bold hover:bg-secondary hover:text-white active:scale-95 dark:text-gray"
            >
              Upload Image
            </label>
            <input type="file" name="image" id="image" className="hidden" />
          </div>

          {/* Title */}
          <div>
            <label htmlFor="blog-title" className="font-bold text-gray">
              Title
            </label>
            <textarea
              name="blog-title"
              id="blog-title"
              placeholder="Type your article title here"
              className="w-full p-4 text-2xl font-bold text-black"
            ></textarea>
          </div>

          {/* Article */}
          <div>
            <label htmlFor="blog-title" className="font-bold text-gray">
              Article
            </label>
            <textarea
              name=""
              id=""
              rows={10}
              value={text}
              placeholder="Type your article here"
              onChange={(e) => setText(e.target.value)}
              className="w-full p-4 text-black "
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-[1rem] py-[0.5rem] text-center font-bold text-white hover:bg-primary/90 active:scale-95"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
