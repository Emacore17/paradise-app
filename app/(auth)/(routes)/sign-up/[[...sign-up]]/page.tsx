import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const SignUpPage = () => {
  return (
    <SignUp
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

export default SignUpPage;
