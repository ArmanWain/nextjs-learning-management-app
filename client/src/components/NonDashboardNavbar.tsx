"use client";

import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Bell, BookOpen, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NonDashboardNavbar = () => {
  const { user } = useUser();
  const [search, setSearch] = useState("");
  const router = useRouter();
  const userRole = user?.publicMetadata?.userType as "student" | "teacher";

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim() === "") {
      return;
    } else {
      router.push(`/search?keyword=${search}`);
    }
  };

  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container">
        <div className="nondashboard-navbar__search">
          <Link href="/" className="nondashboard-navbar__brand" scroll={false}>
            UPSKILL
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <form className="flex" onSubmit={submitHandler}>
                <input
                  type="text"
                  className="nondashboard-navbar__search-input"
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
        <div className="nondashboard-navbar__actions">
          <SignedIn>
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
          </SignedIn>
          <SignedOut>
            <Link
              href="/signin"
              className="nondashboard-navbar__auth-button--login"
              scroll={false}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="nondashboard-navbar__auth-button--signup"
              scroll={false}
            >
              Sign up
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default NonDashboardNavbar;
