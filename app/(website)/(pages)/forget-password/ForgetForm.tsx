'use client';
import { useForgetPassword } from "@/utlis/hooks/useResetPassword";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { Bounce, toast, ToastContainer } from "react-toastify";


interface ForgetFormValues {
    email: string;
  }
export default function ForgetForm() {
    const router = useRouter();
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ForgetFormValues>();
      const { mutate, status, error } = useForgetPassword();

      const onSubmit = (data: ForgetFormValues) => {
        mutate(data, {
          onSuccess: () => {
            toast("Reset Code Sent, Check your Email👌", {
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
                router.push("/forget-password/reset-password");
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
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

          <button
            className="bg-primary-color shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 transition duration-300 ease-in-out"
            type="submit"
            disabled={status === "pending"}
          >
            {status === "pending" ? "Loading..." : "Submit"}
          </button>
          {error && (
            <p className="text-red-500">
              {(error as any).response.data.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
