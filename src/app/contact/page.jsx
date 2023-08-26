"use client";

import { useState } from "react";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

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
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="john@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32"
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Send
        </button>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}































// import React from "react";
// import styles from "./page.module.css";
// import Image from "next/image";
// import Button from "@/components/Button/Button";

// export const metadata = {
//   title: "Lama Dev Contact Information",
//   description: "This is Contact Page",
// };

// const Contact = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Let's Keep in Touch</h1>
//       <div className={styles.content}>
//         <div className={styles.imgContainer}>
//           <Image
//             src="/contact.png"
//             alt=""
//             fill={true}
//             className={styles.image}
//           />
//         </div>
//         <form className={styles.form}>
//           <input type="text" placeholder="name" className={styles.input} />
//           <input type="text" placeholder="email" className={styles.input} />
//           <textarea
//             className={styles.textArea}
//             placeholder="message"
//             cols="30"
//             rows="10"
//           ></textarea>
//           <Button url="#" text="Send"/>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;