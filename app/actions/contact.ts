"use server"
import { revalidatePath } from "next/cache";
import { createContact, deleteContact, updateContact } from "../api/contact";
import { error } from "console";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";

export const createContactAction = async (
  prevState: any,
  formData: FormData
) => {
  if(!FormData){
    return{error:'Form data is missing '}
  }
  const user = await getSession();
  const newContact: ContactType={
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId:user?.id,
  };
  try {
    await createContact(newContact);
    revalidatePath("/contact");
    return{success : true }
  } catch (error) {
    console.log("Error creating contact :", error);
    return { error: "failed to create contact" };
  }
};

export const updateContactAction = async (
  prevState: any,
  formData: FormData
) => {
  const  id = formData.get("id") as string;
  const user = await getSession();
  const updatedContact : ContactType={
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId:user?.id,
  }
  try {
    await updateContact(id, updatedContact);
    revalidatePath("/contact");
    return{success : true }
  } catch (error) {
    console.log("Error creating contact :", error);
    return { error: "failed to create contact" };
  }
};


export const deleteContactAction = async (
  prevState: any,
  formData: FormData
) => {
  const id = formData.get("id") as string;
  try {
    await deleteContact(id);
    revalidatePath("/contact");
    return { success: true };
  } catch (error) {
    console.log("Error updating contact :", error);
    return { error: "failed to update contact" };
  }
};
