import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const SignInPage = () => {
  return (
    <SignIn
      appearance={{
        baseTheme: dark,
        elements: {
          rootBox: "w-full h-full",
          card: "w-full rounded-md bg-secondary",
          formButtonPrimary: "bg-primary hover:bg-rose-500",
          formFieldInput: "bg-white text-black",
        }
      }}
    />
  );
};

export default SignInPage;
