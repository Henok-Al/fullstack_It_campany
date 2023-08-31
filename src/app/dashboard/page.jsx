"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";



const Dashboard = () => {

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
      
      <div className={styles.container}>
        <h1 className="text-green-700">Dashboard</h1>
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>

          
        )}
      </div>
    );
  }
};

export default Dashboard;













