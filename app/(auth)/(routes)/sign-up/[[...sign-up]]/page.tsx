"use client";
import { useState, useEffect } from "react";
import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const SignUpPage = () => {
  const [savedPath, setSavedPath] = useState("/");

  useEffect(() => {
    const path = localStorage.getItem("preLoginRoute") || "/";
    // localStorage.removeItem("preLoginRoute");
    setSavedPath(path);
  }, []);

  return (
    <SignUp
      afterSignUpUrl={savedPath}
      afterSignInUrl={savedPath}
      appearance={{
        baseTheme: dark,
        elements: {
          rootBox: "w-full h-full",
          card: "w-full rounded-md bg-secondary",
          formButtonPrimary: "bg-primary hover:bg-rose-500",
          formFieldInput: "bg-white text-black",
        },
      }}
    />
  );
};

export default SignUpPage;
