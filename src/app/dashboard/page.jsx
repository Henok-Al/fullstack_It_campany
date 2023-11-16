"use client";
import React, { useEffect, useState } from "react";
import "./page.module.css";
import useSWR from "swr";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 2,
    title: "Create Account",
    url: "/dashboard/CreateAccount",
  },
  {
    id: 3,
    title: "Manage Blog",
    url: "dashboard/ManageBlog",
  },

];

const DashboardNavbar = () => {
  const session = useSession();

  const router = useRouter();

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className="flex justify-center items-center col  p-2  border-slate-600 shadow-slate-400   shadow-blue-500 backdrop-opacity-100  border-slate-700">
        <div className="fle">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="mx-4 hover:text-blue-300 "
            >
              {link.title}
            </Link>
          ))}


        </div>
      </div>
    );
  }
};

export default DashboardNavbar;
