"use client";

import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Bell, BookOpen, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const Navbar = ({ isCoursePage }: { isCoursePage: boolean }) => {
  const { user } = useUser();
  const [search, setSearch] = useState("");
  const userRole = user?.publicMetadata?.userType as "student" | "teacher";
  const router = useRouter();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim() === "") {
      return;
    } else {
      router.push(`/search?keyword=${search}`);
    }
  };

  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-navbar__container">
        <div className="dashboard-navbar__search">
          <div className="md:hidden">
            <SidebarTrigger className="dashboard-navbar__sidebar-trigger" />
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <form className="flex" onSubmit={submitHandler}>
                <input
                  type="text"
                  className="dashboard-navbar__search-input"
                  placeholder="Search Courses"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="bg-gray-700 hover:bg-gray-600 flex h-auto justify-center items-center w-[55px] rounded-r-xl"
                  type="submit"
                >
                  <Search className="" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="dashboard-navbar__actions">
          <UserButton
            appearance={{
              baseTheme: dark,
              elements: {
                userButtonOuterIdentifier: "text-customgreys-dirtyGrey",
                userButtonBox: "scale-90 sm:scale-100",
              },
            }}
            showName={true}
            userProfileMode="navigation"
            userProfileUrl={
              userRole === "teacher" ? "/teacher/profile" : "/user/profile"
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
