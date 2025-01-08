"use client";

import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-between bg-custom-gradient text-white">
      <div>
        <Header />
      </div>
      <div className="flex flex-col items-center flex-grow">
        <LoginForm />
      </div>
      <Footer />
    </main>
  );
}
