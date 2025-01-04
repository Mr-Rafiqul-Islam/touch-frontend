import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

function Header() {
  return (
    <header className="py-5 sticky top-0 left-0 z-50 w-full bg-primary-color">
      <div className="container">
        <div className="header flex gap-4 items-center justify-between">
          <div className="logo">
            {/* logo */}
            <Link href={"/"}>
              <img src="./logo.png" alt="logo" width={150} height={80} />
            </Link>
          </div>
          <nav className="w-100 text-center hidden md:block">
            <ul className="flex gap-5">
              <li>
                <a
                  href="/"
                  className="text-sm md:text-base xl:text-xl uppercase font-medium text-white hover:text-slate-950 duration-300 transition-all"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm md:text-base xl:text-xl uppercase font-medium text-white hover:text-slate-950 duration-300 transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm md:text-base xl:text-xl uppercase font-medium text-white hover:text-slate-950 duration-300 transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="call-to-action">
            <Link
              href="/"
              className="hidden md:block py-3 px-[40px] text-sm md:text-base xl:text-[18px] bg-slate-900 transition-all duration-300 rounded-full text-white"
            >
              Login
            </Link>
            {/* menu bar */}
            <div className="block md:hidden">
              <Sheet>
                <SheetTrigger>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                      <div className="bg-primary-color w-full mt-4">
                        <Link href={"/"}>
                          <img
                            src="./logo-with-bg.png"
                            alt="logo"
                            className="mx-auto"
                          />
                        </Link>
                      </div>
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                  <ul className="flex flex-col gap-4 mt-2">
                    <li className="hover:bg-[#E0115F] group px-2 py-1 duration-300 transition-all">
                      <a
                        href="/"
                        className="text-sm md:text-base xl:text-xl uppercase font-medium group-hover:text-white text-slate-950 duration-300 transition-all"
                      >
                        Home
                      </a>
                    </li>
                    <li className="hover:bg-[#E0115F] group px-2 py-1 duration-300 transition-all">
                      <a
                        href="/about"
                        className="text-sm md:text-base xl:text-xl uppercase font-medium group-hover:text-white text-slate-950 duration-300 transition-all"
                      >
                        About
                      </a>
                    </li>
                    <li className="hover:bg-[#E0115F] group px-2 py-1 duration-300 transition-all">
                      <a
                        href="/contact"
                        className="text-sm md:text-base xl:text-xl uppercase font-medium group-hover:text-white text-slate-950 duration-300 transition-all"
                      >
                        Contact
                      </a>
                    </li>
                    <Link
                        href="/"
                        className=" py-3 px-[40px] text-center text-sm md:text-base xl:text-[18px] bg-slate-900 transition-all duration-300 rounded-full text-white"
                      >
                        Login
                      </Link>
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
