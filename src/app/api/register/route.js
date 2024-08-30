import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcryptjs from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashPassword = await bcryptjs.hash(password, 10);

    await connectMongoDB();
    await User.create({ name, email, password: hashPassword });

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);

    return NextResponse.json({ message: "User registered successfully." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "An error occured while regustrating the user." }, { status: 500 });
  }
}