import Image from "next/image";
import Link from "next/link";

export function Article() {
  const content = `Hi everyone! This is my first time publishing an article on my new personal portfolio website. It is about the new version of my personal portfolio, developed using Next and Tailwind, and it consists of hero, about, blog, project, and contact sections.

You may be wondering why I uploaded it here and not on LinkedIn. It's because I've started adding all of my blogs to my personal portfolio. You can check them out on my [blog](/#blog) page.

Have you noticed the UI of my article? It may be familiar to some of you, and that's because I replicated the Docusaurus UI. I find it awesome because of its margins that give elements room to breathe, making it easy to read. Additionally, there are some headers on the top right of where you are currently reading.

I am glad that upon developing these websites, I found that my technology skills have been expanding compared to my previous That means that I have been working hard for these past few months, and this is the result.

In conclusion, reflecting on my career journey thus far, I'm pleased with the progress and results achieved. However, I acknowledge that my personal portfolio still has room for improvement. Moving forward, I'm committed to addressing these issues and enhancing its functionality. I'm excited to embark on the journey of transforming my portfolio into a dynamic website, and I invite you to stay tuned for the upcoming updates and improvements. Together, let's elevate my portfolio to new heights!

If you have any suggestions for improvements, please share them in the comment section of my LinkedIn post.

So what's next for me? For now I want to commit three things:

- Further enhance my knowledge in back-end technologies.
- Build a web system.
- Learn a new programming language.`;
  return (
    <article className="col-span-5 px-4 md:col-span-3 ">
      <Image
        src={`/article-banner/summary-portfolio.png`}
        alt="Summary Portfolio Banner"
        width={800}
        height={800}
      />

      <div className="mt-[1.5rem] text-[2.5rem] font-bold leading-10 dark:text-gray">
        Summary of My Digital Career: A Personal Portfolio Website
      </div>

      <div className="mt-[1.5rem]">April 30, 2024 · 2 min read</div>

      <div className="mt-4 flex items-center gap-4">
        <Image
          src={`/hero.png`}
          alt="Hero"
          width={`96`}
          height={"96"}
          className="h-[4rem] w-[4rem] rounded-full border border-gray object-cover"
        />
        <div className="flex flex-col justify-center leading-[1.5rem]">
          <div className="font-bold text-primary">Vonn Pactol</div>
          <div className="">Aspiring Full-Stack Developer</div>
        </div>
      </div>

      <div className="my-[1.5rem]"></div>
    </article>
  );
}
