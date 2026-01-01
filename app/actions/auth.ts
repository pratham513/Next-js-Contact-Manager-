"use server";
import { redirect } from "next/navigation";
import axios from "axios";
import { UserType } from "../_types/user";
import { error } from "console";
import { deleteSession, setSession } from "../_lib/session";
const API_URL = "http://localhost:3001";

export const loginAction =  async (formData: FormData) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`);

    const user: UserType = response.data[0];
    
    if (!user) throw new Error("Invalid Credentials");
    // set user cookie
    await setSession({name:user.name, email:user.email, id:user.id});
  } 
 catch(error){
  console.log("Login Failed", error)
 }
  redirect("/contact");
};

export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
};
// server actions should async mandatory
