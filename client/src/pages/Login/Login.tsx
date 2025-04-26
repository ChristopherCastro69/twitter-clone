/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TfEtsKRpQf8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
export default function Component() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1DA1F2]">
      <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-8 shadow-lg sm:mx-0">
        <div className="flex justify-center">
          <TwitterIcon className="h-12 w-12 text-[#1DA1F2]" />
        </div>
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to Twitter
        </h1>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <Label htmlFor="username-or-email" className="sr-only">
                Username or Email
              </Label>
              <Input
                id="username-or-email"
                name="username-or-email"
                type="text"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#1DA1F2] focus:outline-none focus:ring-[#1DA1F2] sm:text-sm"
                placeholder="Username or email address"
              />
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#1DA1F2] focus:outline-none focus:ring-[#1DA1F2] sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#1DA1F2] py-2 px-4 text-sm font-medium text-white hover:bg-[#1a8cd8] focus:outline-none focus:ring-2 focus:ring-[#1DA1F2] focus:ring-offset-2"
            >
              Log In
            </Button>
          </div>
        </form>
      </div>
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
