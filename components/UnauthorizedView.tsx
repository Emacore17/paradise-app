import { ShieldX } from "lucide-react";
import { useRouter } from "next/navigation";
const UnauthorizedView = () => {
  const router = useRouter();
  return (
    <div className="bg-black absolute top-0 left-0 w-full h-full z-20 bg-opacity-80 flex items-center justify-center p-4">
      <div className="w-full h-1/2 space-y-8 overflow-y-auto rounded-lg bg-background p-6 md:p-10 xs:w-5/6 sm:w-2/3 md:w-2/3 lg:w-2/5 xl:w-1/3 flex flex-col items-center justify-center">
        <ShieldX className="w-20 h-20 text-red-500" />
        <p className="text-2xl font-bold text-center">
          Registrati per prenotare un biglietto.
        </p>
        <button
          className="bg-white py-2 px-6 text-lg font-bold text-black rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          onClick={() => router.push("/sign-up")}
        >
          SIGN UP
        </button>
        <button
          onClick={router.back}
          className="underline text-primary hover:text-white transition-all duration-300"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default UnauthorizedView;
