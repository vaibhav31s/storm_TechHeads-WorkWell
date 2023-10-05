"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Landing from "@/Components/Landing";
import { useRouter } from "next/navigation";
import Footer from "@/Components/Footer/Footer";
import Form from "@/Components/Form";
// import Landing from "@/Components/Landing";
import Loading from "./loading";
type Props = {};

const Hello = (props: Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    if (session?.user?.role === "Hr") {
      router.push("/hr");
    }
    if (session?.user?.role === "manager") {
      router.push("/manager");
    }
    if (session?.user?.role === "Employee") {
      router.push("/employee");
    }
    return (
      <Loading/>
    );
  }
  return <div>
      <Landing/>

      {/* <Footer /> */}
    </div>;
};

export default Hello;
