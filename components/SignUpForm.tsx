"use client";
import { useSignUp } from "@/utlis/hooks/useAuth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";

interface SignUpFormValues {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>();
  const { mutate, status, error } = useSignUp();

  const onSubmit = (data: SignUpFormValues) => {
    mutate(data, {
      onSuccess: () => {
        toast("Sign Up Successful!👌", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          onClose: () => router.push("/verify"), // Redirect to the verify page on success
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
          Sign Up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 text-lg">
              Full Name
            </label>
            <input
              id="name"
              className="border p-3 shadow-md placeholder:text-base ease-in-out duration-300 outline-none border-gray-300 rounded-lg w-full"
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500">Name is required.</p>}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 text-lg">
              Email
            </label>
            <input
              id="email"
              className="border p-3 shadow-md placeholder:text-base ease-in-out duration-300 outline-none border-gray-300 rounded-lg w-full"
              type="email"
              placeholder="Email"
              autoComplete="email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Email is required.</p>}
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 text-lg">
              Phone
            </label>
            <input
              id="phone"
              className="border p-3 shadow-md placeholder:text-base ease-in-out duration-300 outline-none border-gray-300 rounded-lg w-full"
              type="text"
              placeholder="Phone"
              {...register("phone", { required: true })}
            />
            {errors.phone && <p className="text-red-500">Phone is required.</p>}
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
              autoComplete="current-password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500">Password is required.</p>
            )}
          </div>
          <button
            className="bg-primary-color shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 transition duration-300 ease-in-out"
            type="submit"
            disabled={status === "pending"}
          >
            {status === "pending" ? "Loading..." : "Sign Up"}
          </button>
          {error && (
            <p className="text-red-500">
              {(error as any).response.data.message}
            </p>
          )}
        </form>
        <div className="flex flex-col mt-4 items-center justify-center text-sm">
          <h3 className="">
            Already have an account?{" "}
            <Link
              className="group text-blue-400 transition-all duration-100 ease-in-out"
              href="/login"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Log In
              </span>
            </Link>
          </h3>
        </div>

        {/* Third Party Authentication Options */}
        <div
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
        </div>
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

export default SignUpForm;
