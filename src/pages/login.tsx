/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { usePathname, useRouter } from "next/navigation";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/Navbar";

export default function login() {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, isAuthenticated, user, getToken } = useKindeAuth();

  if (!isLoading && !isAuthenticated && pathname != "/") {
    console.log("sending home");
    return router.push("/");
  }

  return (
    <>
      <NavBar />
      <h1 className="text-display-3">KindeAuth</h1>
      <LoginLink postLoginRedirectURL="/dashboard">Sign in</LoginLink>
      <RegisterLink postLoginRedirectURL="/">Sign up</RegisterLink>
      <Footer />
    </>
  );
}
