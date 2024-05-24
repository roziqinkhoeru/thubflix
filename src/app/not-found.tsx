import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Error 404",
};

function NotFound() {
  const headerList = headers();
  const domain = headerList.get("host");

  return (
    <div className="w-full">
      <div className="container mx-auto mb-40 mt-28 max-w-screen-lg px-4 sm:mt-32">
        <div className="mx-auto mb-8 max-w-3xl">
          <div className="flex w-full justify-center">
            <div className="">
              <h1 className="mb-3 text-4xl font-bold">Error 404, huft!</h1>
              <p className="text-zinc-700 dark:text-zinc-500">
                Oopsies! The page does not exist on {domain}. While you&apos;re
                here, why not check out my other content(?)
              </p>
              <Button asChild className="mt-6">
                <a href="/">Go Home</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
