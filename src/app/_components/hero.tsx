import { Github, Instagram, LinkIcon, Linkedin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <>
      <section className="flex h-[90vh] items-center px-12">
        <div className="relative mx-auto my-0 flex max-w-screen-xl items-center justify-between px-12">
          <div className="w-[50%]">
            <div className="text-[4rem] tracking-tighter">Hi, I am Vonn</div>
            <div className="text-[4rem] tracking-tighter">
              I’m a Web Developer
            </div>
            <div className="mt-[1rem] text-justify text-[1.5rem]">
              Hello there! I'm Vonn, a web developer here to make your online
              dreams a reality. Whether it's creating sleek designs or ensuring
              smooth user experiences, I've got you covered. Let's work together
              to bring your vision to life on the web!
            </div>

            <div className="mt-[1.5rem] ">
              <Link
                href={`#about`}
                className="rounded-lg bg-primary px-[2rem] py-[1rem] font-bold text-white"
              >
                Learn more
              </Link>
            </div>

            <div className="mt-[3rem] flex gap-[1rem]">
              <Link
                href={`https://github.com/sharproyalz`}
                className="flex h-[2rem] w-[2rem] items-center justify-center rounded-sm  hover:bg-primary hover:text-white"
              >
                <Github />
              </Link>
              <Link
                href={`https://twitter.com/PactolVonn`}
                className="flex h-[2rem] w-[2rem] items-center justify-center rounded-sm  hover:bg-primary hover:text-white"
              >
                <X />
              </Link>
              <Link
                href={`https://instagram.com/sharproyalz`}
                className="flex h-[2rem] w-[2rem] items-center justify-center rounded-sm  hover:bg-primary hover:text-white"
              >
                <Instagram />
              </Link>
              <Link
                href={`https://www.linkedin.com/in/vonn-pactol-718a2a283/`}
                className="flex h-[2rem] w-[2rem] items-center justify-center rounded-sm  hover:bg-primary hover:text-white"
              >
                <Linkedin />
              </Link>
            </div>
          </div>

          <div className="absolute right-0 w-[48rem]">
            <Image src={`/hero.png`} alt="Hero" width={`768`} height={"768"} />
          </div>
        </div>
      </section>
    </>
  );
}
