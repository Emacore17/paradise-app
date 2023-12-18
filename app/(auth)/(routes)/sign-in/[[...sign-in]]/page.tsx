"use client";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useEffect, useState } from "react";

const SignInPage = () => {
  const [savedPath, setSavedPath] = useState("/");

  useEffect(() => {
    const path = localStorage.getItem("preLoginRoute") || "/";
    // localStorage.removeItem("preLoginRoute");
    setSavedPath(path);
  }, []);
  return (
    <SignIn
      afterSignInUrl={savedPath}
      afterSignUpUrl={savedPath}
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

export default SignInPage;
