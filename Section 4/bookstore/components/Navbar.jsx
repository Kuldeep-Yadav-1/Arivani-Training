"use client";

import {
  Navbar as FlowbiteNavbar,
  Button,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function AppNavbar() {
  const router = useRouter();
  return (
    <div className="px-2 md:px-6 lg:px-8 border-b-1">
      <FlowbiteNavbar fluid rounded>
        <NavbarBrand onClick={() => router.push("/")}>
          <img
            src="/image/bookstore_logo1.png"
            className="mr-3 h-9 sm:h-15 rounded-full cursor-pointer"
            alt="Bookstore Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white cursor-pointer">
            Bookstore
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button className="bg-green-600 cursor-pointer hover:bg-white hover:text-green-600 text-white border" onClick={()=>router.push("/signup")}>Signup</Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink
            className="cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </NavbarLink>
          <NavbarLink
            className="cursor-pointer"
            onClick={() => router.push("/products")}
          >
            Product
          </NavbarLink>

          <NavbarLink
            className="cursor-pointer"
            onClick={() => router.push("/addBook")}
          >
            Add Book
          </NavbarLink>
          <NavbarLink
            className="cursor-pointer"
            onClick={() => router.push("/")}
          >
            Card
          </NavbarLink>
          <NavbarLink
            className="cursor-pointer"
            onClick={() => router.push("/aboutus")}
          >
            About Us
          </NavbarLink>
        </NavbarCollapse>
      </FlowbiteNavbar>
    </div>
  );
}

export default AppNavbar;
