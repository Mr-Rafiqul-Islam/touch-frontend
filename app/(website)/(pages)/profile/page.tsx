"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Settings, User } from "lucide-react";
import { useLogout, useFetchUser } from "@/utlis/hooks/useAuth";
import ProfileDataSkeleton from "@/components/skeletons/ProfileDataSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import UpdatePassForm from "./UpdatePassForm";
import { useUpdateProfile } from "@/utlis/hooks/useResetPassword";

interface UpdateFormValues {
  name: string;
  email: string;
  phone: string;
}

const Profile = () => {
  // For fetching data
  const { data: user, isLoading, refetch } = useFetchUser();

  // Controlled state for form data
  const [formData, setFormData] = useState<UpdateFormValues>({
    name: "",
    email: "",
    phone: "",
  });

  // When user data loads, initialize formData state
  useEffect(() => {
    if (user?.user) {
      setFormData({
        name: user.user.name || "",
        email: user.user.email || "",
        phone: user.user.phone || "",
      });
    }
  }, [user]);

  // Editing state
  const [isEditing, setIsEditing] = useState(false);

  // Update mutation
  const { mutate, status, error } = useUpdateProfile();

  // Save handler - sends formData to backend
  const handleSave = () => {
    mutate(formData, {
      onSuccess: () => {
        setIsEditing(false);
        refetch();
      },
      onError: (error: any) => {
        console.log(error.response?.data?.message || error.message);
      },
    });
  };

  // Input change handler to update formData state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // For smooth scroll
  const profileRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Logout logic
  const { mutate: logout } = useLogout();
  const handleLogout = async () => {
    logout();
    window.location.href = "/login";
  };
  // Get the first letter of the user's name
  const firstLetterOfName = user?.user?.name ? user.user.name[0].toUpperCase() : '';

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <Card className="text-center p-4">
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center space-y-4">
                {isLoading ? (
                  <Skeleton className="h-24 w-24 rounded-full" />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-5xl font-bold text-gray-600">
                      {firstLetterOfName}
                    </span>
                  </div>
                )}
              </div>
              <ul className="space-y-2 text-start">
                <li
                  className="text-gray-700 font-medium flex items-center gap-2 cursor-pointer"
                  onClick={() => scrollToSection(profileRef)}
                >
                  <User size={16} /> Personal Info
                </li>
                <li
                  className="text-gray-700 font-medium flex items-center gap-2 cursor-pointer"
                  onClick={() => scrollToSection(settingsRef)}
                >
                  <Settings size={16} /> Settings
                </li>
                <li
                  className="text-red-500 cursor-pointer"
                  onClick={handleLogout}
                >
                  Log Out
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Profile Info */}
        <div className="w-full md:w-3/4 space-y-4">
          <div ref={profileRef}>
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  Profile
                  {isEditing ? (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSave}
                        disabled={status === "pending"}
                      >
                        Save
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(true)}
                    >
                      <Pencil size={16} /> Edit
                    </Button>
                  )}
                </CardTitle>
                <p className="text-sm text-gray-500">
                  Basic info, for a faster booking experience
                </p>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <ProfileDataSkeleton />
                ) : isEditing ? (
                  <table className="w-full table-fixed">
                    <tbody>
                      {Object.entries(formData).map(([key, value]) => (
                        <tr key={key}>
                          <td className="font-medium text-gray-700 py-2 capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </td>
                          <td className="text-gray-500 py-2">
                            <input
                              type="text"
                              name={key}
                              value={value}
                              onChange={handleChange}
                              required
                              className="border p-2 rounded-md w-full"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <table className="w-full table-fixed">
                    <tbody>
                      {Object.entries(formData).map(([key, value]) => (
                        <tr key={key}>
                          <td className="font-medium text-gray-700 py-2 capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </td>
                          <td className="text-gray-500 py-2">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {error && (
                  <p className="mt-2 text-sm text-red-600">
                    Error updating profile: {error.message}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
          <Card ref={settingsRef}>
            <CardHeader>
              <CardTitle className="">Settings</CardTitle>
              <p className="text-sm text-gray-500">
                Manage your email address, mobile number and password
              </p>
            </CardHeader>
            <CardContent>
              <UpdatePassForm user={user} isLoading={isLoading} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
