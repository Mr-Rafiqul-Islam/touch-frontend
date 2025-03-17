"use client";
import React from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import queryClient from "@/utlis/queryClient";
import { Button } from '@/components/ui/button';
import { useResetPassword } from '@/utlis/hooks/useResetPassword';

interface ResetFormValues {
  email: string;
  reset_code: number;
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
    <div>
        <form
        className="bg-white shadow-md rounded px-8 py-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"  
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="reset_code"
            type="number"
            placeholder="Enter OTP"
            {...register("reset_code", { required: true })}
          />
          {errors.reset_code && (
            <p className="text-red-500">OTP is required.</p>
          )}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
           New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Type new password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="flex items-center justify-end">
          
          <Button
            variant={"default"}
            type='submit'
          >
            Reset Password
          </Button>
        </div>
        {error && (
          <p className="text-red-500 max-w-32">{(error as any).response.data.message}</p>
        )}
      </form>
    </div>
  )
}

export default ResetPassword