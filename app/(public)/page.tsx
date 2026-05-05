import { auth } from "@/src/lib/auth";
import Hero from "@/src/shared/components/ui/Hero";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: generatePageTitle('Inicio')
}

export default async function Home() {

  return (
    <>
    <Hero />
    </>
  );
}
