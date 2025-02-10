"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ReactNode } from "react";

export const LayoutContext = React.createContext({
  currentPage: "/",
  setCurrentPage: (page: string) => {},
});

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (currentPage) return;

    if (pathname == "/") {
      setCurrentPage("home");
    } else {
      setCurrentPage(pathname.replace("/", ""));
    }
  }, [pathname, currentPage]);

  useEffect(() => {
    if (!currentPage) return;

    if (currentPage == "home") {
      router.push("/");
    } else if (!currentPage.includes("/")) {
      router.push("/" + currentPage);
    }
  }, [router, currentPage]);
  return (
    <LayoutContext.Provider
      value={{ currentPage: currentPage ?? "home", setCurrentPage }}
    >
      <Header {...{ currentPage: currentPage ?? "home", setCurrentPage }} />
      {children}
      <Footer setCurrentPage={setCurrentPage} />
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
