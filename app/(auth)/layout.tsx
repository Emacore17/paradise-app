const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-[calc(100vh-6rem)] w-full flex justify-center items-center py-8">
      <div className="w-4/5 sm:w-2/3 md:w-[25rem] min-h-[30rem]">{children}</div>
    </main>
  );
};

export default AuthLayout;
