import Hero from "@/src/shared/components/ui/Hero";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: generatePageTitle('Inicio')
}

export default function Home() {

  return (
    <>
    <Hero />
    </>
  );
}
