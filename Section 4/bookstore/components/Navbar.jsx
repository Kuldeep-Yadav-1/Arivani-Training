"use client";

import { Divider } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import LogoutIcon from "@mui/icons-material/Logout";

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
import React, { useContext, useEffect, useState } from "react";
import UseAppContext from "./useContext";

function AppNavbar() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const {
    loggedIn,
    setLoggedIn,
    logout,
    currentUser,
    setCurrentUser,
    loadingData,
    setLoadingData,
  } = UseAppContext();

  const [profileshow, setProfileShow] = useState(true);

  const handleProfilePop = () => {
    setProfileShow((show) => !show);
  };

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
          {currentUser ? (
            <>
              <div className="text-black text-sm leading-none my-auto relative">
                <p className="font-semibold">{currentUser?.name}</p>
                <p className="text-xs">{currentUser?.email}</p>
              </div>
              <button
                // onClick={() => logout()}
                // onClick={()=>router.push("/profilepop")}
                onClick={handleProfilePop}
                className="ms-5 rounded cursor-pointer flex justify-center"
              >
                <img
                  src="/image/profile.jpeg"
                  className=" h-12 rounded-full cursor-pointer"
                  alt="Profile Logo"
                />
              </button>

              {profileshow ? (
                <div></div>
              ) : (
                <div>
                  <div className="absolute top-15 right-14 z-10">
                    <div className="w-50 h-18 rounded border px-2 py-1 text-xs bg-white">
                      <div className="p-1 cursor-pointer">
                        <p>
                          <AccountCircleIcon /> Profile
                        </p>
                       
                      </div>
                       <Divider />
                      {/* <div className="pb-2 cursor-pointer">
                        <p>
                          <KeyIcon /> Change Password
                        </p>
                        <Divider />
                      </div> */}
                      <p
                        className="p-1 cursor-pointer"
                        onClick={() => logout()}
                      >
                        <LogoutIcon /> Logout
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <Button
                className="bg-green-600 cursor-pointer hover:bg-white hover:text-green-600 text-white border"
                onClick={() => router.push("/signin")}
              >
                Signin
              </Button>
            </>
          )}
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
            onClick={() => router.push("/addbook")}
          >
            Add Book
          </NavbarLink>
          <NavbarLink
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            Cart
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
