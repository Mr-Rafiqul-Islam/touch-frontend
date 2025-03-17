import React from "react";

export default function page() {
  return (
    <div className="container h-screen w-full flex justify-center items-center">
      <div id="back-div" className="bg-primary-color rounded-[26px] m-4">
        <div className="border-[20px] border-transparent rounded-[20px] bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
          
          <form
            // onSubmit={handleSubmit(onSubmit)}
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
                //   {...register("email", { required: true })}
              />
              {/* {errors.email && <p className="text-red-500">Email is required.</p>} */}
            </div>

            <button
              className="bg-primary-color shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 transition duration-300 ease-in-out"
              type="submit"
              // disabled={status === "pending"}
            >
              Submit
            </button>
            {/* {error && (
                <p className="text-red-500">
                {(error as any).response.data.message}
                </p>
            )} */}
          </form>
        </div>
      </div>
    </div>
  );
}
