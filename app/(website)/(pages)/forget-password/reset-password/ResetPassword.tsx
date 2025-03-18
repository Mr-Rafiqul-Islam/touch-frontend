"use client";
import React from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { useResetPassword } from '@/utlis/hooks/useResetPassword';

interface ResetFormValues {
  email: string;
  resetCode: string;
  password: string;
}
function ResetPassword() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<ResetFormValues>();
  const { mutate, status, error } = useResetPassword();

  const router = useRouter();
  const onSubmit = (data: ResetFormValues) => {
    mutate(data, {
      onSuccess: () => {
        toast("Password Reset successful!👌", {
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
            router.push("/login");
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
    <div className="bg-primary-color rounded-[26px] m-4">
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
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full mb-2 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Your Email"
              {...register("email", { required: true })}
            />

            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="verification_code"
            >
              Reset Code:
            </label>
            <input
              className="shadow appearance-none border rounded w-full mb-2 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="resetCode"
              type="text"
              placeholder="Enter OTP"
              {...register("resetCode", { required: true })}
            />
            {errors.resetCode && (
              <p className="text-red-500">OTP is required.</p>
            )}
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full mb-2 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Type new password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex items-center justify-end">
            <Button variant={"default"} type="submit">
            {status === "pending" ? "Loading..." : "Reset Password"}
            </Button>
          </div>
          {error && (
            <p className="text-red-500 max-w-32">
              {(error as any).response.data.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ResetPassword