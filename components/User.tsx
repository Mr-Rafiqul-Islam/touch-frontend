"use client";
import { LogOut, Tag, User as UserCircle } from "lucide-react";
import { FaAngleDown } from "react-icons/fa6";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { userData } from "@/types";
import { useLogout } from "@/utlis/hooks/useAuth";

function User({ userData }: { userData: userData | null }) {
  const { mutate: logout } = useLogout();
  const handleLogout = async () => {
    console.log("logout");
    logout();
    // Redirect to the login page
    window.location.href = "/login";
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <div className="flex gap-2 items-center">
            <span className="w-8 h-8 rounded-full grid place-content-center ring-1 ring-black/80 bg-white">
              <UserCircle className="w-5 h-5 text-primary-color font-bold" />
            </span>
            <FaAngleDown className="w-4 h-4 text-white " />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="capitalize">
            {userData?.name || "Guest"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            {" "}
            <UserCircle className="h-3 w-3"/> Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            {" "}
            <Tag className="h-3 w-3"/> My Booking
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}><LogOut className="h-3 w-3"/> Log Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default User;
