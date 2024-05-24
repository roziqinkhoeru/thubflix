"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const NAVITEMS: { title: string; href: string; description: string }[] = [
  {
    title: "Dog",
    href: "/dog",
    description: "Fetches data from an external API and displays it in a card.",
  },
  {
    title: "Favourites",
    href: "/favourite",
    description:
      "Displays a list of items that can be added to or removed from a list of favourites.",
  },
  {
    title: "Votes",
    href: "/vote",
    description: "Displays a list of items that can be upvoted or downvoted.",
  },
  {
    title: "Dog Images",
    href: "/dog-image",
    description: "Fetches images from an external API and displays them.",
  },
  {
    title: "Search",
    href: "/dog-search",
    description:
      "Fetches data from an external API based on user input and displays it in a card.",
  },
];

function Navbar() {
  return (
    <nav className="sticky inset-x-0 top-0 w-full bg-white shadow">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="block">
            <Image
              className="h-auto w-[100px]"
              src="/dogland.svg"
              alt="Dogland Logo"
              width={100}
              height={27}
            />
          </Link>
          <div className="">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy
                              and paste into your apps. Accessible.
                              Customizable. Open Source.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="#" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="#" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="#" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {NAVITEMS.map((navItem) => (
                        <ListItem
                          key={navItem.title}
                          title={navItem.title}
                          href={navItem.href}
                        >
                          {navItem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Login</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Welcome back!</DialogTitle>
                  <DialogDescription>
                    Log in to your account or create a new one.
                  </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login">
                    <Card>
                      <CardHeader>
                        <CardTitle>Sign in</CardTitle>
                        <CardDescription>
                          Sign in to your account using your credentials.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <Label htmlFor="username">Username</Label>
                          <Input id="name" placeholder="Input your username" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="password">Password</Label>
                          <Input
                            id="password"
                            type="password"
                            placeholder="Password"
                          />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Sign in</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                  <TabsContent value="register">
                    <Card>
                      <CardHeader>
                        <CardTitle>Register</CardTitle>
                        <CardDescription>
                          Create a new account using your email address.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Input your email"
                          />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Register</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    href: string;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
