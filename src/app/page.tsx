import { ThemeToggler } from "@/components/shared/ThemeToggler";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-red-900">
        <div className="container mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="">
              The Trailers
            </Link>
            <div className="flex items-center gap-x-4">
              <div className="">
                <Input
                  type="text"
                  placeholder="Search for a movie"
                  name="headerSearch"
                  id="headerSearch"
                />
              </div>
              <ThemeToggler />
            </div>
          </div>
          <div className="mt-96">
            <div className="flex items-center gap-x-3">
              <p className="">Aaron Horvath</p>
              <p className="">Michael Jelenic</p>
            </div>
            <h1 className="text-4xl font-bold uppercase">
              The Super Mario Bros. Movie
            </h1>
          </div>
        </div>
        <div className="flex items-center"></div>
      </header>
      <main className="container mx-auto mt-10 max-w-7xl px-6">
        <section className="mx-auto mb-12 w-full">
          <div className="flex h-[calc(100svh-10rem)] min-h-96 w-full items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold">
                <span className="text-red-700">Thubflix</span>: Your ultimate
                resource for discovering and watching the latest movie trailers.
              </h1>
              <Button asChild className="mt-6">
                <Link href="/dog">Explore</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
