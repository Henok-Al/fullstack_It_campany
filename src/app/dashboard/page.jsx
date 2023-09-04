// "use client";

// import Link from "next/link";
// import React from "react";
// import "./page.module.css"
// import { signOut, useSession } from "next-auth/react";

// const links = [
//   {
//     id: 1,
//     title: "Dashboard",
//     url: "/dashboard",
//   },
//   {
//     id: 2,
//     title: "Create Password",
//     url: "/dashboard/CreatePassword",
//   },
//   {
//     id: 3,
//     title: "/Manage Blog",
//     url: "dashboard/ManageBlog",
//   },
//   {
//     id: 4,
//     title: "Manage Portfolio",
//     url: "dashboard/ManagePortfolio",
//   },
//   // {
//   //   id: 5,
//   //   title: "Contact",
//   //   url: "/contact",
//   // },
//   // {
//   //   id: 6,
//   //   title: "",
//   //   url: "/dashboard",
//   // },
// ];

// const DashboardNavbar = () => {
//   const session = useSession();

//   return (
//     <div className="">
//       <Link href="/" >
//         Atlas Computer Technlogy
//       </Link>
//       <div className="">
//         {links.map((link) => (
//           <Link key={link.id} href={link.url} className="link">
//             {link.title}
//           </Link>
//         ))}
//         {/* {session.status === "authenticated" && (
//           <button className={styles.logout} onClick={signOut}>
//             Logout
//           </button>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default DashboardNavbar;

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
    title: "Create Password",
    url: "/dashboard/CreatePassword",
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
      <div className="flex col  p-20 bg-white rounded-[20px]  border-slate-600 shadow-slate-400  bg-zinc-900  shadow-blue-500 backdrop-opacity-100  border-slate-700">
        <div className="flex text-red-500">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="mx-4 hover:text-green-300 text-gray-700 text-base"
            >
              {link.title}
            </Link>
          ))}
          {session.status === "authenticated" && (
            <button className="ml-12 text-lg  text-green-500" onClick={signOut}>
              Logout
            </button>
          )}
        </div>
      </div>
    );
  }
};

export default DashboardNavbar;
