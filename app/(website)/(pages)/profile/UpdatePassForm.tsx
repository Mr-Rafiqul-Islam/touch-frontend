import SettingsDataSkeleton from "@/components/skeletons/SettingsDataSkeleton";
import { Button } from "@/components/ui/button";
import { userResponse } from "@/types";
import { useUpdatePassword } from "@/utlis/hooks/useResetPassword";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Bounce, toast, ToastContainer } from "react-toastify";

interface UpdateFormValues {
  current_password: string;
  new_password: string;
  new_password_confirmation: string;
}
function UpdatePassForm({
  user,
  isLoading,
}: {
  user: userResponse;
  isLoading: boolean;
}) {
  const settingsData = [
    { label: "Email", value: user ? user?.user.email : "N/A" },
    { label: "Mobile Number", value: user ? user?.user.phone : "N/A" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormValues>();
  const [passEditing, setPassEditing] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const { mutate, status, error } = useUpdatePassword();

  const onSubmit = (data: UpdateFormValues) => {
    
    mutate(data, {
      onSuccess: () => {
        setPassEditing(false)
        toast("Password updated successfully!👌", {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
      },
      onError: (error: any) => {
        console.log(error.response.data.message);
        toast(error.response.data.message, {
            position: "bottom-right",
            autoClose: 1500,
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
    <>
      {isLoading ? (
        <SettingsDataSkeleton />
      ) : (
        <table className="w-full table-fixed">
            <ToastContainer
        position="bottom-right"
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
          <tbody>
            {settingsData.map((item, index) => (
              <tr key={index}>
                <td className="font-medium text-gray-700 py-2 capitalize">
                  {item.label}
                </td>
                <td className="text-gray-500 py-2">{item.value}</td>
              </tr>
            ))}
            <tr>
              <td className="font-medium text-gray-700 py-2 capitalize">
                Password
              </td>
              <td className="py-2">
                {!passEditing ? (
                  <span
                    className="text-[#020842] font-bold cursor-pointer"
                    onClick={() => setPassEditing(true)}
                  >
                    Change Password ?
                  </span>
                ) : (
                  <form className="flex justify-between gap-3" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2">
                      <input
                        type="text"
                        id="current_password"
                        placeholder="Current Password"
                        {...register("current_password", { required: true })}
                        className="border p-2 rounded-md w-full"
                      />
                      <input
                        type="text"
                        id="new_password"
                        placeholder="New Password"
                        {...register("new_password", { required: true })}
                        className="border p-2 rounded-md w-full"
                      />
                      <input
                        type="text"
                        id="new_password_confirmation"
                        placeholder="Confirm Password"
                        {...register("new_password_confirmation", { required: true })}
                        className="border p-2 rounded-md w-full"
                      />
                    </div>
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        type="submit"
                      >
                        Save
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPassEditing(false)}
                      >
                        Cancle
                      </Button>
                    </div>
                  </form>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
}

export default UpdatePassForm;
