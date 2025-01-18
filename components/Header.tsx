'use client'
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/public/logo.png";
import logobg from "@/public/logo-with-bg.png";
import Link from "next/link";
import Image from "next/image";
import { useFetchUser, useLogout } from "@/utlis/hooks/useAuth";
import { cn } from "@/lib/utils";

function Header() {
  const { data: user, isLoading } = useFetchUser();
  const { mutate: logout } = useLogout();
  const handleLogout = async () => {
    await logout();
    // Redirect to the login page
    window.location.href = "/login";
  };
  return (
    <header className="py-5 sticky top-0 left-0 z-50 w-full bg-primary-color">
      <div className="container">
        <div className="header flex gap-4 items-center justify-between">
          <div className="logo">
            {/* logo */}
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={150} height={80} />
            </Link>
          </div>
          <nav className="w-100 text-center hidden md:block">
            <ul className="flex gap-5">
              <li>
                <Link
                  href="/"
                  className="text-sm md:text-base xl:text-xl uppercase font-medium text-white hover:text-slate-950 duration-300 transition-all"
                >
                  Home
                </Link>
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
              href="/login"
              className={cn("hidden md:block py-3 px-[40px] text-sm md:text-base xl:text-[18px] bg-slate-900 transition-all duration-300 rounded-full text-white hover:scale-105",
              user && "md:hidden")}
            >
              Login
            </Link>
            <div
              className={cn(
                "flex justify-between p-4 bg-gray-100",
                !user && "hidden"
              )}
            >
              <h1 className="text-xl font-bold">
                Welcome, {user?.name || "Guest"}!
              </h1>
              <button className="btn">Logout</button>
            </div>
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
                          <Image
                            src={logobg}
                            alt="logo"
                            width={150}
                            height={80}
                            className="mx-auto"
                          />
                        </Link>
                      </div>
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                  </SheetHeader>
                  <ul className="flex flex-col gap-4 mt-2">
                    <li className="hover:bg-[#E0115F] group px-2 py-1 duration-300 transition-all">
                      <Link
                        href="/"
                        className="text-sm md:text-base xl:text-xl uppercase font-medium group-hover:text-white text-slate-950 duration-300 transition-all"
                      >
                        Home
                      </Link>
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
                    <div>
                      <Link
                        href="/login"
                        className={cn(
                          "py-3 text-center px-[40px] text-sm md:text-base xl:text-[18px] bg-slate-900 transition-all duration-300 rounded-full text-white hover:scale-105",
                          user && "hidden"
                        )}
                      >
                        Login
                      </Link>
                      <div
                        className={cn(
                          "flex justify-between p-4 bg-gray-100",
                          !user && "hidden"
                        )}
                      >
                        <h1 className="text-xl font-bold">
                          Welcome, {user?.name || "Guest"}!
                        </h1>
                        <button className="btn" onClick={handleLogout}>Logout</button>
                      </div>
                    </div>
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
