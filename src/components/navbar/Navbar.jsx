"use client"
import Link from "next/link";
import React, { useState } from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/home",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Services",
    url: "/services",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    title: "About",
    url: "/about",
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 7,
    title: "",
    url: "/dashboard/CreatePassword",
  },
  {
    id: 8,
    title: "",
    url: "/dashboard/ManageBlog",
  },
];

const Navbar = () => {
  const session = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 shadow-sm ">
      <div className=" mx-auto flex  justify-between items-center">
        <Link href="/" className=" font-bold text-2xl">
          Atlas Computer Technology
        </Link>
        <div className="lg:hidden flex ">
          <button
            className="text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`lg:flex  space-x-4  ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <DarkModeToggle />
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className=" hover:text-gray-200 flex flex-col"
            >
              {link.title}
            </Link>
          ))}
          {session.status === "authenticated" && (
            <button
              className="text-white hover:text-gray-200"
              onClick={signOut}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





































// "use client";

// import Link from "next/link";
// import React from "react";
// import styles from "./navbar.module.css";
// import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import { signOut, useSession } from "next-auth/react";

// const links = [
//   {
//     id: 1,
//     title: "Home",
//     url: "/home",
//   },
//   {
//     id: 2,
//     title: "Portfolio",
//     url: "/portfolio",
//   },
//   {
//     id:3,
//     title: "Services",
//     url: "/services"
//   },
//   {
//     id: 4,
//     title: "Blog",
//     url: "/blog",
//   },
//   {
//     id: 5,
//     title: "About",
//     url: "/about",
//   },
//   {
//     id: 6,
//     title: "Contact",
//     url: "/contact",
//   },
 
//   {
//     id: 7,
//     title: "",
//     url: "/dashboard/CreatePassword",
//   },
//   {
//     id: 8,
//     title: "",
//     url: "/dashboard/ManageBlog",
//   },
// ];

// const Navbar = () => {
//   const session = useSession();

//   return (
//     <div className={styles.container}>
//       <Link href="/" className={styles.logo}>
//         Atlas Computer Technlogy 
//       </Link>
//       <div className={styles.links}>
//         <DarkModeToggle />
//         {links.map((link) => (
//           <Link key={link.id} href={link.url} className={styles.link}>
//             {link.title}
//           </Link>
//         ))}
//         {session.status === "authenticated" && (
//           <button className={styles.logout} onClick={signOut}>
//             Logout
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;




















