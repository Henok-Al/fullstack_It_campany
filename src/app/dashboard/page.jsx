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
  {
    id: 4,
    title: "Manage Portfolio",
    url: "dashboard/ManagePortfolio",
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
      <div className=" flex col  p-20 bg-white rounded-[20px]  border-slate-600 shadow-slate-400  bg-zinc-900  shadow-blue-500 backdrop-opacity-100  border-slate-700 sticky">
        <div className="flex text-red-500">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="mx-4 hover:text-blue-300 text-gray-700 text-base"
            >
              {link.title}
            </Link>
          ))}
          <button>Go Back</button>


        </div>
      </div>
    );
  }
};

export default DashboardNavbar;
