import connect from "@/utils/db";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export const POST =  async (req) => {
  const { fullname, email, message } = await req.json();

  try {
    await connect();
    await Contact.create({ fullname, email, message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}