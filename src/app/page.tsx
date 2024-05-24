"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto mt-10 max-w-7xl px-6">
      <section className="mx-auto mb-12 w-full">
        <div className="flex h-[calc(100svh-10rem)] min-h-96 w-full items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">
              <span className="text-red-700">Dogland</span>: Discover Dog Breeds
            </h1>
            <Button asChild className="mt-6">
              <Link href="/dog">Explore</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
