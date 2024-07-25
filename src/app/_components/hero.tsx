import { Github, Instagram, LinkIcon, Linkedin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <>
      <section className="flex items-center px-4 md:px-12">
        <div className="relative mx-auto my-0 flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row lg:px-12">
          <div className="w-full lg:w-[50%]">
            <div className="text-[3rem] tracking-tighter dark:text-gray md:text-[4rem]">
              Hi, I am Vonn
            </div>
            <div className="text-[3rem] tracking-tighter dark:text-gray md:text-[4rem]">
              I’m a Web Developer
            </div>
            <div className="text-4 mt-4 text-justify md:text-[1.5rem] ">
              Hello there! I&apos;m Vonn, a web developer here to make your
              online dreams a reality. Whether it&apos;s creating sleek designs
              or ensuring smooth user experiences, I&apos;ve got you covered.
              Let&apos;s work together to bring your vision to life on the web!
            </div>

            <div className="mt-[1.5rem] ">
              <Link
                href={`#about`}
                className="rounded-lg bg-primary px-4 py-2 font-semibold text-white hover:bg-primary/90 active:scale-95 md:px-[2rem] md:py-4"
              >
                Learn more
              </Link>
            </div>

            <div className="mt-[3rem] flex gap-4">
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

          <div className="-z-10 mt-[2rem] w-full lg:absolute lg:right-0 lg:mt-0 lg:max-w-[32rem]">
            <Image src={`/hero.png`} alt="Hero" width={`768`} height={"768"} />
          </div>
        </div>
      </section>
    </>
  );
}
