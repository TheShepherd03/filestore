'use client'
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { api } from "../../convex/_generated/api";
import { useMutation } from "convex/react";

export default function Home() {
  const createFile=useMutation(api.files.createFile);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedOut>
      <SignInButton mode="modal">
        <Button>Sign In</Button>
      </SignInButton>
      </SignedOut>

      <SignedIn>
      <SignOutButton>
        <Button>Sign Out</Button>
      </SignOutButton>
      <Button onClick={
          ()=>{
            createFile(
              {fileName:"Dummyfile"}
            )
          }
        }>create a File</Button>
      </SignedIn>
      
    </main>
  );
}
