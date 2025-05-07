import Link from "next/link";
import ClientNavbar from "./ClientNavbar";
import { auth } from "@/app/auth";
import { links } from "./links";
import UserProfileMenu from "./UserProfileMenu";

export default async function Navbar() {
  const session = await auth();

  return (
    <>
      <ClientNavbar />
      <div className="hidden bg-darkBlue w-full h-20 sticky top-0 z-30 lg:flex items-center font-normal text-white">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            {links.map((link, index) => (
              <div key={index} className="relative group">
                {link.dropdown ? (
                  <div className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2 cursor-pointer">
                    {link.name}
                  </div>
                ) : (
                  <Link
                    href={link.url}
                    className="flex-shrink-0 lg:text-sm xl:text-base px-2 py-2 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                )}
                {link.dropdown && (
                  <div className="absolute flex flex-col gap-y-2 left-0 mt-2 top-6 pt-4 translate-y-[100px] opacity-0 invisible group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-darkBlue shadow-lg min-w-max z-50">
                    {link.dropdown.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sublink.url}
                        className="block px-4 py-2 hover:opacity-90 dark:hover:bg-gray-700"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <UserProfileMenu session={session} />
          </div>
        </div>
      </div>
    </>
  );
}
