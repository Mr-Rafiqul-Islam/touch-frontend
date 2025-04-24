"use client";
import { useLogin } from "@/utlis/hooks/useAuth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import queryClient from "@/utlis/queryClient";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const { mutate, status, error } = useLogin();
  

  const onSubmit = (data: LoginFormValues) => {
    mutate(data, {
      onSuccess: () => {
        toast("Login successful!👌", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          onClose: () => {
            router.push("/");
            // Manually trigger a refetch of user data
            queryClient.invalidateQueries({ queryKey: ['user'] });
          },
        });
      },
      onError: (error: any) => {
        toast(error.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        console.log(error.response.data.message);
      },
    });
  };

  return (
    <div id="back-div" className="bg-primary-color rounded-[26px] m-4">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="border-[20px] border-transparent rounded-[20px] bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
        <h1 className="pt-8 pb-6 font-bold text-5xl text-center cursor-default">
          Sign in
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 text-lg">
              Email
            </label>
            <input
              id="email"
              className="border p-3 shadow-md placeholder:text-base ease-in-out duration-300 outline-none border-gray-300 rounded-lg w-full"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Email is required.</p>}
          </div>
          <div>
            <label htmlFor="password" className="mb-2 text-lg">
              Password
            </label>
            <input
              id="password"
              className="border p-3 shadow-md placeholder:text-base ease-in-out duration-300 outline-none border-gray-300 rounded-lg w-full"
              type="password"
              placeholder="Password"
              autoComplete="off"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500">Password is required.</p>
            )}
          </div>
          <Link
            className="group text-blue-400 transition-all duration-100 ease-in-out"
            href="/forget-password"
          >
            <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Forget your password?
            </span>
          </Link>
          <button
            className="bg-primary-color shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 transition duration-300 ease-in-out"
            type="submit"
            disabled={status === "pending"}
          >
            {status === "pending" ? "Loading..." : "Log In"}
          </button>
          {error && (
            <p className="text-red-500">
              {(error as any).response.data.message}
            </p>
          )}
        </form>
        <div className="flex flex-col mt-4 items-center justify-center text-sm">
          <h3 className="">
            Don't have an account?{" "}
            <Link
              className="group text-blue-400 transition-all duration-100 ease-in-out"
              href="/signup"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Sign Up
              </span>
            </Link>
          </h3>
        </div>

        {/* Third Party Authentication Options */}
        {/* <div
          id="third-party-auth"
          className="flex items-center justify-center mt-5 flex-wrap"
        >
          <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
            <Image
              className="max-w-[25px]"
              src="/google.svg"
              alt="Google"
              width={30}
              height={30}
            />
          </button>
          <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
            <Image
              className="max-w-[25px]"
              src="facebook.svg"
              alt="Facebook"
              width={30}
              height={30}
            />
          </button>
        </div> */}
        <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
          <p className="cursor-default">
            By signing in, you agree to our{" "}
            <a
              className="group text-blue-400 transition-all duration-100 ease-in-out"
              href="#"
            >
              <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Terms
              </span>
            </a>{" "}
            and{" "}
            <a
              className="group text-blue-400 transition-all duration-100 ease-in-out"
              href="#"
            >
              <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Privacy Policy
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
