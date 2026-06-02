"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-primary text-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-xl font-semibold md:hover:scale-105 cursor-pointer"
        >
          SørConsultant
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/guest"
            className="rounded px-3 py-2 md:hover:scale-105 cursor-pointer"
          >
            Guest Check-In
          </Link>

          <Link
            href="/overview"
            className="rounded px-3 py-2 md:hover:scale-105 cursor-pointer"
          >
            View Log
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="h-0.5 w-6 bg-background" />
          <span className="h-0.5 w-6 bg-background" />
          <span className="h-0.5 w-6 bg-background" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <aside className="flex h-full w-3/4 max-w-xs flex-col bg-primary text-primary-foreground">
            <div className="flex h-20 items-center px-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-xl font-semibold"
              >
                SørConsultant
              </Link>
            </div>

            <nav className="mt-12 flex flex-col text-xl font-semibold">
              <Link
                href="/overview"
                onClick={() => setIsOpen(false)}
                className="border-b border-primary-foreground/50 px-6 py-3"
              >
                View All Guests
              </Link>

              <Link
                href="/guest"
                onClick={() => setIsOpen(false)}
                className="border-b border-primary-foreground/50 px-6 py-3"
              >
                Check-in
              </Link>
            </nav>
          </aside>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex-1 bg-black/40"
            aria-label="Close menu"
          />
        </div>
      )}
    </nav>
  );
}
