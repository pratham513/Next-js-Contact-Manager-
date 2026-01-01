"use client";
import React from 'react';
import { logoutAction } from '../actions/auth';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();
   const handleLogout=async()=>{
    await logoutAction();// this redirect happens in server action
    router.push("/login");
    router.refresh();
  }
  return (
    <div>
      <button className= "px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer"onClick={handleLogout}>Logout</button> 
    </div>
  )
}

export default LogoutButton
