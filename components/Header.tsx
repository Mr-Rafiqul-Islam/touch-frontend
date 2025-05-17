"use client";
import React, { useEffect } from "react";
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
import User from "./User";
import { FaBars } from "react-icons/fa6";

function Header() {
  const { data: user, isLoading, refetch } = useFetchUser();
  

  useEffect(() => {
    refetch();
  }, [user, refetch]);

  
  return (
    <header className="py-5 sticky top-0 left-0 z-50 w-full bg-primary-color">
      <div className="container">
        <div className="header flex gap-4 items-center justify-between">
          <div className="logo">
            {/* logo */}
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={150} height={80} className="w-[100px] md:w-[150px]" />
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
                <Link
                  href="/about"
                  className="text-sm md:text-base xl:text-xl uppercase font-medium text-white hover:text-slate-950 duration-300 transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm md:text-base xl:text-xl uppercase font-medium text-white hover:text-slate-950 duration-300 transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="call-to-action flex gap-4 items-center">
            {/* menu bar */}
            <div className="flex items-center md:hidden ">
              <Sheet>
                <SheetTrigger>
                  <FaBars className="h-6 w-6 text-white"/>
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
                      <Link
                        href="/about"
                        className="text-sm md:text-base xl:text-xl uppercase font-medium group-hover:text-white text-slate-950 duration-300 transition-all"
                      >
                        About
                      </Link>
                    </li>
                    <li className="hover:bg-[#E0115F] group px-2 py-1 duration-300 transition-all">
                      <Link
                        href="/contact"
                        className="text-sm md:text-base xl:text-xl uppercase font-medium group-hover:text-white text-slate-950 duration-300 transition-all"
                      >
                        Contact
                      </Link>
                    </li>
                    <Link
                      href="/login"
                      className={cn(
                        "py-3 text-center px-[40px] text-sm md:text-base xl:text-[18px] bg-slate-900 transition-all duration-300 rounded-full text-white hover:scale-105",
                        user && "hidden"
                      )}
                    >
                      Login
                    </Link>
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
            <Link
              href="/login"
              className={cn(
                "hidden md:block py-3 px-[40px] text-sm md:text-base xl:text-[18px] bg-slate-900 transition-all duration-300 rounded-full text-white hover:scale-105",
                user && "md:hidden"
              )}
            >
              Login
            </Link>
            <div className={cn("flex gap-4 items-center", !user && "hidden")}>
              <User userData={user?.user} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
