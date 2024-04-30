import { Github, Instagram, LinkIcon, Linkedin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="mt-[8rem] w-full bg-primary">
        <div className="mx-auto my-0 flex max-w-screen-xl items-center justify-between px-12 py-[2rem]">
          <div className="flex gap-[1rem] ">
            <div className=" flex items-center gap-[1rem]">
              <Link
                href={`https://github.com/sharproyalz`}
                className="flex h-[2rem] w-[2rem] items-center justify-center rounded-sm text-white  hover:bg-primary hover:text-black"
              >
                <Github />
              </Link>
              <Link
                href={`https://twitter.com/PactolVonn`}
                className="flex h-[2rem] w-[2rem] items-center justify-center rounded-sm text-white  hover:bg-primary hover:text-black"
              >
                <X />
              </Link>
              <Link
                href={`https://instagram.com/sharproyalz`}
                className="flex h-[2rem] w-[2rem] items-center justify-center rounded-sm text-white  hover:bg-primary hover:text-black"
              >
                <Instagram />
              </Link>
              <Link
                href={`https://www.linkedin.com/in/vonn-pactol-718a2a283/`}
                className="flex h-[2rem] w-[2rem] items-center justify-center rounded-sm text-white  hover:bg-primary hover:text-black"
              >
                <Linkedin />
              </Link>
            </div>
          </div>

          <div className="h-[3rem] w-[3rem] rounded-full bg-gray">
            <Image
              src={`/sharp-royalz-logo.png`}
              alt="Sharp Royalz Logo"
              width={100}
              height={100}
            />
          </div>

          <div className="text-white">pactol.vonn@gmail.com</div>
        </div>

        <div className="h-[2px] w-full bg-white"></div>

        <div className="mx-auto my-0 flex max-w-screen-xl items-center justify-center px-12 py-[2rem] text-white">
          © Developed by Vonn
        </div>
      </footer>
    </>
  );
}
