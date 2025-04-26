/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4BEfdxTzouK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PageUrl } from "../../constants/pages.constants";
import { SVGProps, useEffect, useState } from "react";

export default function Component() {
  const[message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link
          to={PageUrl.HOME}
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <TwitterIcon className="w-6 h-6 text-primary" />
          <span className="sr-only">Twitter</span>
        </Link>
        <div>
          <p>This is the message from the backend: {message}</p>
        </div>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search Twitter"
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <Button variant="ghost" size="icon" className="rounded-full">
            <img
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full"
              alt="Avatar"
              style={{ aspectRatio: "32/32", objectFit: "cover" }}
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="container px-4 py-6 md:px-6">
          <div className="bg-card rounded-lg border p-4 md:p-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <Input
                type="text"
                placeholder="What's happening?"
                className="flex-1 bg-muted rounded-full px-4 py-2 text-sm"
              />
              <Button className="px-4 py-2 text-sm">Tweet</Button>
            </div>
          </div>
          <div className="grid gap-4 mt-6">
            <Card className="bg-card rounded-lg border p-4 md:p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">Acme Inc</div>
                    <div className="text-muted-foreground text-sm">@acme</div>
                    <div className="text-muted-foreground text-sm">· 1h</div>
                  </div>
                  <p className="mt-2">
                    Excited to announce our latest product launch! Check it out
                    and let us know what you think. #NewProduct #Innovation
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <Button variant="ghost" size="icon">
                      <HeartIcon className="w-5 h-5" />
                      <span className="sr-only">Like</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <RepeatIcon className="w-5 h-5" />
                      <span className="sr-only">Retweet</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MessageCircleIcon className="w-5 h-5" />
                      <span className="sr-only">Comment</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <MoveHorizontalIcon className="w-5 h-5" />
                      <span className="sr-only">More</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="bg-card rounded-lg border p-4 md:p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">Jane Doe</div>
                    <div className="text-muted-foreground text-sm">
                      @janedoe
                    </div>
                    <div className="text-muted-foreground text-sm">· 3h</div>
                  </div>
                  <p className="mt-2">
                    Loving the new design updates! The app is looking sleeker
                    than ever. #UXDesign #ProductUpdate
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <Button variant="ghost" size="icon">
                      <HeartIcon className="w-5 h-5" />
                      <span className="sr-only">Like</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <RepeatIcon className="w-5 h-5" />
                      <span className="sr-only">Retweet</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MessageCircleIcon className="w-5 h-5" />
                      <span className="sr-only">Comment</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <MoveHorizontalIcon className="w-5 h-5" />
                      <span className="sr-only">More</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="bg-card rounded-lg border p-4 md:p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">John Smith</div>
                    <div className="text-muted-foreground text-sm">
                      @johnsmith
                    </div>
                    <div className="text-muted-foreground text-sm">· 6h</div>
                  </div>
                  <p className="mt-2">
                    Just tried the new feature and it's a game-changer! Kudos to
                    the team. #ProductUpdate #FeatureFriday
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <Button variant="ghost" size="icon">
                      <HeartIcon className="w-5 h-5" />
                      <span className="sr-only">Like</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <RepeatIcon className="w-5 h-5" />
                      <span className="sr-only">Retweet</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MessageCircleIcon className="w-5 h-5" />
                      <span className="sr-only">Comment</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <MoveHorizontalIcon className="w-5 h-5" />
                      <span className="sr-only">More</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function HeartIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MessageCircleIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

function MoveHorizontalIcon(props: SVGProps<SVGSVGElement>) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function RepeatIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
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
