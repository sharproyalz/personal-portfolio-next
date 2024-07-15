import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <>
      <section id="about" className="mt-[4rem] flex px-4 md:px-12 ">
        <div className="mx-auto my-0 max-w-screen-xl px-4 md:px-12">
          <div className="flex flex-col items-center justify-center">
            <div className="my-[1rem] text-[2rem] dark:text-gray md:text-[3rem]">
              About
            </div>
            <div className="text-[1rem] md:text-[1.5rem]">
              The brief overview of my personal information.
            </div>
            <div className="mt-[1.5rem] h-[2px] w-[20%] bg-primary"></div>
          </div>

          <div className="mt-[5rem] flex  flex-col items-center justify-between lg:flex-row">
            <div className="w-full lg:w-[64%]">
              <div className="text-[1.5rem] dark:text-gray md:text-[2.5rem]">
                Aspiring Full-stack Developer: Skills and Ambitions
              </div>
              <div className="mt-[1rem] h-[2px] w-[20%] bg-primary"></div>

              <div className="mt-[3rem] flex flex-col gap-[3rem] text-justify">
                <div className="text-[1rem] md:text-[1.5rem]">
                  Hi I am Vonn, a BS-IT student currently studying at Cavite
                  State University. I am committed to becoming a Full-stack
                  Developer.
                </div>
                <div className="text-[1rem] md:text-[1.5rem]">
                  My frontend technologies include Figma, Next.js, and Tailwind,
                  complemented by backend technologies such as Node.js (Prisma,
                  Zod, etc.), Postgres, and MySQL. I am continuously refining my
                  skills and exploring new frameworks to further enhance my
                  development skills.
                </div>
              </div>

              <div className="mt-[3rem]">
                <Link
                  href={`#contact`}
                  className=" rounded-lg bg-primary px-[1rem] py-[0.5rem] font-semibold text-white hover:bg-primary/90 active:scale-95"
                >
                  Contact me
                </Link>
              </div>
            </div>

            <div className="mt-[4rem] flex h-[28rem] w-[16rem] items-center rounded-2xl bg-primary lg:mt-0">
              <div className="flex h-[26rem] w-[16rem] -translate-x-5 items-center justify-center rounded-2xl bg-gray dark:bg-card">
                <Image
                  src={`/computer.png`}
                  alt="Computer"
                  width={256}
                  height={256}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
