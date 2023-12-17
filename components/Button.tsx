import { bungee } from "@/app/layout";
import { cn } from "@/lib/utils";

type ButtonFont = "default" | "bungee";

type ButtonType = "primary" | "secondary";

interface IButtonProps {
  label?: string;
  font?: ButtonFont;
  type?: ButtonType;
  className?: string;
}

const Button = ({
  label,
  font = "default",
  type = "primary",
  className,
}: IButtonProps) => {
  const buttonClass = cn(
    "rounded-lg py-3 px-6 text-sm whitespace-nowrap transition-all duration-300",
    {
      "bg-gradient-to-r from-primary to-rose-500 hover:to-primary":
        type === "primary",
      "border-2 border-foreground hover:bg-foreground hover:text-black":
        type === "secondary",
      [bungee.className]: font === "bungee",
    },
    className
  );
  return <button className={buttonClass}>{label}</button>;
};

export default Button;
