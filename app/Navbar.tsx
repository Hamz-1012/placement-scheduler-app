"use client";
import ThemeChanger from "./ThemeChanger";
import Link from "next/link";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import defaultUser from "../public/default-user.png";

function titleCase(str: any) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Navbar = () => {
  const session = useSession();
  console.log(session);
  const isAuthenticated = session ? true : false;

  const supabase = useSupabaseClient();
  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) console.log("Error: ", error);
  }
  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/schedule">Schedule</Link>
            </li>
            <li>
              <Link href="/company">Company</Link>
            </li>
            <li>
              <Link href="/forum">Forum</Link>
            </li>
            <li>
              <ThemeChanger />
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/schedule">Schedule</Link>
          </li>
          <li>
            <Link href="/company">Company</Link>
          </li>
          <li>
            <Link href="/forum">Forum</Link>
          </li>
          <li>
            <ThemeChanger />
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-5">
        <div className="flex space-x-2 items-center">
          {isAuthenticated ? (
            <h2>
              Hey,{" "}
              {titleCase(
                session!.user.user_metadata.name.split(" ")[0].toLowerCase()
              )}
            </h2>
          ) : (
            <button
              className="btn btn-primary btn-sm"
              onClick={googleSignIn}>
              Sign in with google
            </button>
          )}
          <div className="avatar">
            <div className="w-12 rounded-full">
              <Image
                src={
                  isAuthenticated
                    ? session!.user.user_metadata.avatar_url
                    : defaultUser
                }
                alt="user"
                width={48}
                height={12}
              />
            </div>
          </div>
        </div>
        <a className="btn">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
