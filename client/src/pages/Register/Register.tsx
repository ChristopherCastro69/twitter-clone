/**
 * v0 by Vercel.
 * @see https://v0.dev/t/V2gXt6sZLRW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PageUrl } from "../../constants/pages.constants";
import { SVGProps, useState } from "react";
import { handleSignUp } from "../../controllers/authController"; // Import the

export default function Component() {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = async () => {
    await handleSignUp(email, password, setStatus);
  };
  return (
    <div className="flex flex-col min-h-dvh bg-[#1DA1F2]">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link to={PageUrl.LOGIN} className="flex items-center justify-center">
          <TwitterIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Twitter</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-4">
        <Card className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl font-bold">
              Create your account
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Just a few quick steps to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {status && <p className="text-center text-red-500">{status}</p>}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full" onClick={onSignUp}>
              Sign Up
            </Button>
            <div className="text-center">
              <p className="text-sm text-gray-600">Already have an account?</p>
              <Link
                to={PageUrl.LOGIN}
                className="text-[#1DA1F2] hover:underline"
              >
                Log In
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
