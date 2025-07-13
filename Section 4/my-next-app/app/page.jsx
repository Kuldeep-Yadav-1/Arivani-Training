"use client"
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(100);
  const router = useRouter();
  return (
    <div className="">
      <h1 className="mt-10 text-3xl text">Kuldeep Project</h1>

      <button className="bg-blue-500 px-5 py-2 me-2 rounded-lg text-white cursor-pointer" onClick={() => router.push("/practice")}>Click me to visit practice</button> 
      <button className="bg-blue-500 px-5 py-2 me-2 rounded-lg text-white cursor-pointer" onClick={() => router.push("/laptopData")}>Click me to visit lap top data</button> 
      <button className="bg-blue-500 px-5 py-2 me-2 rounded-lg text-white cursor-pointer" onClick={() => router.push("/todolist")}>go to ToDo list</button> 
      <button className="bg-blue-500 px-5 py-2 me-2 rounded-lg text-white cursor-pointer" onClick={() => router.push("/taskManagement")}>go to Task Management</button> 
      <button className="bg-blue-500 px-5 py-2 me-2 rounded-lg text-white cursor-pointer" onClick={() => router.push("/components/Footer")}>go to Task Management</button> 
      {/* <Footer/> */}
    </div>
  );
}
