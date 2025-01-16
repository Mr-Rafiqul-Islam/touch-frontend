'use client'
import { useLogin } from "@/utlis/hooks/useAuth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<SignUpFormValues>();
  const { mutate, status, error } = useLogin();

  const onSubmit = (data: SignUpFormValues) => {
    mutate(data, {
      onSuccess: () => {
        router.push("/"); // Redirect to the home page on success
      },
    });
  };

  return (
    <div
          id="back-div"
          className="bg-primary-color rounded-[26px] m-4"
        >
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
                  {...register("email", { required: true })}
                />
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
                  {...register("password", { required: true })}
                />
              </div>
              <button
                className="bg-primary-color shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 transition duration-300 ease-in-out"
                type="submit"
                disabled={status === 'pending'}
              >
                {status === 'pending' ? "Loading..." : "Log In"}
              </button>
              {error && <p className="text-red-500">{(error as any).response.data.message}</p>}
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
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                  alt="Google"
                />
              </button>
              <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                  alt="Facebook"
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
