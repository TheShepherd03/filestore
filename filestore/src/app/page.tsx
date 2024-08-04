'use client'
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { api } from "../../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";

export default function Home() {
  const createFile=useMutation(api.files.createFile);
  const files=useQuery(api.files.getFiles);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedOut>
      <SignInButton mode="modal">
        <Button>Sign In</Button>
      </SignInButton>
      <Button onClick={
          ()=>{
            createFile(
              {fileName:"Dummyfile"}
            )
          }
        }>create a File</Button>
      </SignedOut>

      <SignedIn>
      <SignOutButton>
        <Button>Sign Out</Button>
      </SignOutButton>
      

        {
          files?.map((x)=>{
            return <div key={x._id}>
              {x.fileName}
            </div>
          })
        }
      </SignedIn>
      
    </main>
  );
}
