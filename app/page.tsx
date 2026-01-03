"use client";

import { toast } from "sonner";
import { useState } from "react";
import Form from "@/components/form";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!name || !email) {
      toast.error("Please fill in all fields 😠");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address 😠");
      return;
    }

    setLoading(true);

    const promise = new Promise(async (resolve, reject) => {
      try {
        // First, attempt to send the email
        const mailResponse = await fetch("/api/mail", {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstname: name, email }),
        });

        if (!mailResponse.ok) {
          if (mailResponse.status === 429) {
            reject("Rate limited");
          } else {
            reject("Email sending failed");
          }
          return; // Exit the promise early if mail sending fails
        }

        // If email sending is successful, proceed to insert into Notion
        const notionResponse = await fetch("/api/notion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        });

        if (!notionResponse.ok) {
          if (notionResponse.status === 429) {
            reject("Rate limited");
          } else {
            reject("Notion insertion failed");
          }
        } else {
          resolve({ name });
        }
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(promise, {
      loading: "Getting you on the waitlist... 🚀",
      success: (data) => {
        setName("");
        setEmail("");
        return "Thank you for joining the waitlist 🎉";
      },
      error: (error) => {
        if (error === "Rate limited") {
          return "You're doing that too much. Please try again later";
        } else if (error === "Email sending failed") {
          return "Failed to send email. Please try again 😢.";
        } else if (error === "Notion insertion failed") {
          return "Failed to save your details. Please try again 😢.";
        }
        return "An error occurred. Please try again 😢.";
      },
    });

    promise.finally(() => {
      setLoading(false);
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden">
      <Header />

      {/* Hero Section with Transformation Image */}
      <section className="relative w-full min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/image/model.png"
            alt="Body transformation"
            fill
            className="object-cover object-center md:object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-7xl mx-auto">
            {/* Text Overlay */}
            <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-4 lg:mb-6 px-4 leading-tight">
                <span className="inline-block  px-2 sm:px-3 md:px-4 lg:px-6 py-1 md:py-2 rounded">
                  Trans<span className="bg-[#5be75d] text-black">form</span>
                </span>
                {" "}
                <span className="text-white">your body</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 px-4">
                with AI
              </p>
            </div>

            {/* Form Section */}
            <div className="flex justify-center mt-8 md:mt-12">
              <div className="w-full max-w-md">
                <Form
                  name={name}
                  email={email}
                  handleNameChange={handleNameChange}
                  handleEmailChange={handleEmailChange}
                  handleSubmit={handleSubmit}
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section with Phone Mockup */}
      <section className="relative w-full bg-black py-2 md:py-10 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-4 lg:px-0">
                The App you been waiting to reach your full potential
              </h2>
            </div>

            {/* Phone Mockup */}
            <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <div className="relative transform rotate-[8deg] sm:rotate-12 lg:rotate-12 translate-y-4 sm:translate-y-8 lg:translate-y-12">
                  <Image
                    src="/image/phone.png"
                    alt="Befit App"
                    width={600}
                    height={1200}
                    className="w-full h-auto drop-shadow-2xl"
                    quality={90}
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="relative w-full bg-black py-12 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              What You&apos;ll Get
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Join thousands of users transforming their fitness journey with AI-powered coaching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="mb-4 w-16 h-16 rounded-full bg-[#5be75d]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5be75d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                AI-Powered Workouts
              </h3>
              <p className="text-gray-400">
                Personalized training plans tailored to your goals and fitness level
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="mb-4 w-16 h-16 rounded-full bg-[#5be75d]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5be75d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Track Progress
              </h3>
              <p className="text-gray-400">
                Monitor your fitness journey with detailed analytics and insights
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="mb-4 w-16 h-16 rounded-full bg-[#5be75d]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5be75d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Expert Guidance
              </h3>
              <p className="text-gray-400">
                Access to professional trained AI Personal Trainer and nutritionists in your pocket
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="mb-4 w-16 h-16 rounded-full bg-[#5be75d]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5be75d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Flexible Schedule
              </h3>
              <p className="text-gray-400">
                Work out anytime, anywhere with routines that fit your lifestyle
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="mb-4 w-16 h-16 rounded-full bg-[#5be75d]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5be75d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Health & Wellness
              </h3>
              <p className="text-gray-400">
                Comprehensive approach to fitness including nutrition and recovery
              </p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="mb-4 w-16 h-16 rounded-full bg-[#5be75d]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5be75d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Features To Expect 
              </h3>
              <p className="text-gray-400">
                 we currently working on 50+ features in the pipeline from video Analysis workout to ai powered Enivronment explore
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <Social /> */}
      <Footer />
    </main>
  );
}