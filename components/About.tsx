import { CornerDownRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <section className="py-40">
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
          <div className="about-img">
            <Image src="./app-photo.jpg" alt="About" width={500} height={500} />
          </div>
          <div className="about-content">
            <h2 className="font-bold max-w-[600px] md:leading-[50px] text-3xl lg:text-4xl text-center md:text-start">
              Maximize your experience with Touch using our{" "}
              <span className="text-primary-color">mobile app.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
              <div className="flex items-center gap-4 text-gray-600">
                <CornerDownRightIcon size={20} className="text-primary-color" />
                Quick and easy bookings
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <CornerDownRightIcon size={20} className="text-primary-color" />
                Get reminders before departure
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <CornerDownRightIcon size={20} className="text-primary-color" />
                Instant access to your tickets
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <CornerDownRightIcon size={20} className="text-primary-color" />
                Travel with digital tickets
              </div>
            </div>
            <div className="store-img flex flex-col md:flex-row gap-4 mt-6 md:mt-8 items-center md:items-start">
              <Link href='/'>
                <Image
                  src="/google-play-store.png"
                  alt="Google Play"
                  width={200}
                  height={60}
                  className=""
                />
              </Link>
              <Link href='/'>
                <Image
                  src="/apple-app-store.png"
                  alt="App Store"
                  width={200}
                  height={70}
                  className=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
