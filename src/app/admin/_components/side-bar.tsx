"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideBar() {
  const pathname = usePathname();
  return (
    <>
      <aside className="hidden p-[2rem] shadow-md md:block md:w-72">
        <ul className="sticky top-[2rem]">
          <li className="">
            <Link className={``} href={`/admin/blogs`}>
              <div
                className={`${
                  pathname === "/admin/blogs" ? "bg-primary text-white" : ""
                } w-full rounded-lg p-4 hover:bg-primary hover:text-white dark:text-gray`}
              >
                Blogs
              </div>
            </Link>
          </li>

          <li className="">
            <Link href={`/admin/projects`}>
              <div
                className={`${
                  pathname === "/admin/projects" ? "bg-primary text-white" : ""
                } w-full rounded-lg p-4 hover:bg-primary hover:text-white dark:text-gray`}
              >
                Projects
              </div>
            </Link>
          </li>

          <li className="">
            <Link href={`/admin/contacts`}>
              <div
                className={`${
                  pathname === "/admin/contacts" ? "bg-primary text-white" : ""
                } w-full rounded-lg p-4 hover:bg-primary hover:text-white dark:text-gray`}
              >
                Contacts
              </div>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
