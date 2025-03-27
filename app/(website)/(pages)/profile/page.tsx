"use client";
import React, { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Settings, User } from "lucide-react";
import { useLogout, useFetchUser } from "@/utlis/hooks/useAuth";
import ProfileDataSkeleton from "@/components/skeletons/ProfileDataSkeleton";
import SettingsDataSkeleton from "@/components/skeletons/SettingsDataSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import UpdatePassForm from "./UpdatePassForm";

const Profile = () => {
  // for fetching data
  const { data: user, isLoading, refetch } = useFetchUser();
  console.log(user?.user);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user ? user?.user.name : "N/A",
    email: user ? user?.user.email : "N/A",
    phone: user ? user?.user.phone : "N/A",
  });
  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);
  const handleSave = () => {
    console.log("Updated Data:", formData);
    setIsEditing(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // for smooth scroll
  const profileRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // for logout
  const { mutate: logout } = useLogout();
  const handleLogout = async () => {
    console.log("logout");
    logout();
    // Redirect to the login page
    window.location.href = "/login";
  };

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
                    <span className="text-xl text-gray-600">Avatar</span>
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
                      <Button variant="outline" size="sm" onClick={handleSave}>
                        Save
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" onClick={handleEdit}>
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
                      {Object.keys(formData).map((key, index) => (
                        <tr key={index}>
                          <td className="font-medium text-gray-700 py-2 capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </td>
                          <td className="text-gray-500 py-2">
                            <input
                              type="text"
                              name={key}
                              value={(formData as Record<string, string>)[key]}
                              onChange={handleChange}
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
                      {Object.entries(formData).map(([key, value], index) => (
                        <tr key={index}>
                          <td className="font-medium text-gray-700 py-2 capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </td>
                          <td className="text-gray-500 py-2">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
