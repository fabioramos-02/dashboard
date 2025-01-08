"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <button
        className="btn btn-primary"
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
      >
        Login com Github
      </button>
    </main>
  );
}
