import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <>
      <section className="flex px-12 py-[1rem]">
        <div className="mx-auto my-0 w-full max-w-screen-xl px-12">
          <div className="mb-[1rem] text-center text-[3rem]">Projects</div>

          <div className="mt-[5rem] grid w-full grid-cols-3 gap-8">
            <Link
              href={`https://sharpie-store.vercel.app/`}
              target="_blank"
              className="group col-span-1 flex w-[24rem] flex-col gap-[1rem] rounded-2xl bg-gray p-4 hover:bg-gray/80"
            >
              <div className="self-end text-xs">March 2024</div>

              <Image
                src={`/sharpie-banner.png`}
                alt={`Sharpie Banner`}
                height={256}
                width={384}
                className=""
              />

              <div className="text-[2rem] group-hover:text-primary group-hover:underline">
                Ecommerce
              </div>

              <div className="">Next.js, TypeScript, Tailwind, Postgres</div>
            </Link>

            <Link
              href={`https://sds-ss.vercel.app/`}
              target="_blank"
              className="group col-span-1 flex w-[24rem] flex-col gap-[1rem] rounded-2xl bg-gray p-4 hover:bg-gray/80"
            >
              <div className="self-end text-xs">
                October 2023 - January 2024
              </div>
              <Image
                src={`/capstone-project-banner.png`}
                alt={`Sharpie Banner`}
                height={256}
                width={384}
                className=""
              />
              <div className="text-[2rem] group-hover:text-primary group-hover:underline">
                Capstone Project
              </div>

              <div className="">
                Next.js, TypeScript, Tailwind, tRPC, Postgres
              </div>
            </Link>

            <Link
              href={`https://css-position-playground.vercel.app/`}
              target="_blank"
              className="group col-span-1 flex w-[24rem] flex-col gap-[1rem] rounded-2xl bg-gray p-4 hover:bg-gray/80"
            >
              <div className="self-end text-xs">December 2023</div>

              <Image
                src={`/css-position-playground-banner.png`}
                alt={`CSS Position Playground Banner`}
                height={256}
                width={384}
                className=""
              />
              <div className="text-[1.5rem] group-hover:text-primary group-hover:underline">
                CSS Position Playground
              </div>

              <div className="">JavaScript</div>
            </Link>

            <Link
              href={`https://background-changer-one.vercel.app/`}
              target="_blank"
              className="group col-span-1 flex w-[24rem] flex-col gap-[1rem] rounded-2xl bg-gray p-4 hover:bg-gray/80"
            >
              <div className="self-end text-xs">November 2023</div>

              <Image
                src={`/background-changer-banner.png`}
                alt={`Sharpie Banner`}
                height={256}
                width={384}
                className=""
              />
              <div className="text-[2rem] group-hover:text-primary group-hover:underline">
                Background Changer
              </div>
              <div className="">JavaScript</div>
            </Link>

            <Link
              href={`https://scientific-calculator-navy.vercel.app/`}
              target="_blank"
              className="group col-span-1 flex w-[24rem] flex-col gap-[1rem] rounded-2xl bg-gray p-4 hover:bg-gray/80"
            >
              <div className="self-end text-xs">September 2023</div>
              <Image
                src={`/scientific-calculator-banner.png`}
                alt={`Scientific Calculator Banner`}
                height={256}
                width={384}
                className=""
              />
              <div className="text-[2rem] group-hover:text-primary group-hover:underline">
                Scientific Calculator
              </div>
              <div className="">JavaScript</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
