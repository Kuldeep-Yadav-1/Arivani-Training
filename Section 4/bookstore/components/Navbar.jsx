"use client";

import { Divider } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import LogoutIcon from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import LoginIcon from "@mui/icons-material/Login";

import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
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

  const [profileshow, setProfileShow] = useState(false);

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
        <div className="flex md:order-2 cursor-pointer items-center gap-2">
          {!currentUser ? (
            <button
              className="px-2 py-1 border me-1 cursor-pointer rounded bg-[#0b7c6b] text-white hover:bg-white hover:text-[#0b7c6b] flex items-center"
              onClick={() => router.push("/signin")}
            >
              <LoginIcon className="mr-1" /> Sign In
            </button>
          ) : (
            <div className="flex justify-between">
              <div className="me-1">
                <p className="text-xs font-semibold">{currentUser?.name}</p>
                <p className="text-xs ">{currentUser?.email}</p>
              </div>
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="/image/profile.jpeg"
                    className="h-2 cursor-pointer"
                    rounded
                  />
                }
              >
                <DropdownHeader className="w-35">
                  <span className="block truncate text-sm font-medium  text-[#0b7c6b]" onClick={()=>router.push("/profile")}>
                    <AccountCircleIcon className="mr-1" /> Profile
                  </span>
                  <DropdownDivider />
                  {/* <span className="block truncate text-sm font-medium  text-[#0b7c6b]">
                    <MailIcon className="mr-1" /> {currentUser.email}
                  </span>
                  <DropdownDivider /> */}
                  <span
                    className="block truncate text-sm font-medium cursor-pointer text-[#0b7c6b]"
                    onClick={() => {
                      logout();
                      setLoggedIn(false);
                      setCurrentUser(null);
                      router.push("/");
                    }}
                  >
                    <LogoutIcon className="mr-1" /> Log Out
                  </span>
                </DropdownHeader>
              </Dropdown>
            </div>
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
          {/* <NavbarLink
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            Cart
          </NavbarLink> */}
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
