"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useVerify, useResend } from "@/utlis/hooks/useAuth";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Button } from "@/components/ui/button";

interface VerifyFormValues {
  verification_code: string;
}
const Verify = () => {
  const router = useRouter();
  const resendCode = useResend();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyFormValues>();
  const { mutate, status, error } = useVerify();

  const onSubmit = (data: VerifyFormValues) => {
    
    console.log("Submitted");
    mutate(data, {
      onSuccess: () => {
        toast("Verification successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          onClose: () => router.push("/login"), // Redirect to the login page after toast is closed
        });
      },
      onError: (error: any) => {
        toast(error?.response?.data?.message, {
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
        console.log(error);
      },
    });
  };

  // Resend OTP
  const handleResend = (event: React.MouseEvent<HTMLButtonElement>) => {
    resendCode.mutate();
    const button = event.currentTarget;
    button.disabled = true;
    setTimeout(() => {
      button.disabled = false;
    }, 60000);   // Resend button will be disabled for 60 seconds
  };
  return (
    <div className="max-w-md mx-auto border rounded my-48">
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
      <form
        className="bg-white shadow-md rounded px-8 py-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="verification_code"
          >
            Verification Code:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="verification_code"
            type="text"
            placeholder="Enter OTP"
            {...register("verification_code", { required: true })}
          />
          {errors.verification_code && (
            <p className="text-red-500">OTP is required.</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          
          <Button variant={"default"} className="bg-primary-color hover:bg-primary-color/90" type="submit" >Verify</Button>
          <Button
            variant={"default"}
            onClick={handleResend}
          >
            Resend
          </Button>
        </div>
        {error && (
          <p className="text-red-500">{(error as any).response.data.message}</p>
        )}
      </form>
    </div>
  );
};

export default Verify;
