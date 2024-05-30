"use client";

import Image from "next/image";
import Link from "next/link";
import LoginModal from "./LoginModal";
import SearchBar from "./SearchBar";
import ThemeToggler from "./ThemeToggler";

function Navbar() {
  return (
    <nav className="sticky inset-x-0 top-0 z-50 gap-4 bg-slate-100/10 shadow backdrop-blur-md transition-colors">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="block">
            <Image
              className="h-auto w-[100px]"
              src="/thubflix.svg"
              alt="Thubflix Logo"
              width={100}
              height={27}
            />
          </Link>
          <div className="flex items-center space-x-4">
            <div className="">
              <SearchBar />
            </div>
            <ThemeToggler />
            <LoginModal />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
