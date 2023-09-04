"use client";

import { useState } from "react";
import React from "react";
// import styles from "./page.module.css";
import "./contact.module.css"
import Image from "next/image";
import Buttton from "../../components/Button/Button"

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contacts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
  <div className="w-full md:w-1/2">
    <form onSubmit={handleSubmit} className="bg-neutral-900 p-6 shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="fullname" className="block mb-1">Full Name</label>
        <input
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          type="text"
          id="fullname"
          placeholder="enter your full name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          id="email"
          placeholder="enter you email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      
      <div className="mb-4 py-2 px-3 rounded-lg">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } text-sm`}
              key={e}
            >
              {e}
            </div>
          ))}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block mb-1">Your Message</label>
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          id="message"
          placeholder="Type your message here..."
        ></textarea>
      </div>

      <button className="bg-green-700 text-white font-bold py-2 px-4 rounded-lg" type="submit">
        Send
      </button>
    </form>
  </div>
</div>

  );
}
