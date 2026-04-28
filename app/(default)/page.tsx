export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      
      <Hero />
      <div className="-mt-3 mb-3 mx-auto h-px w-[1300px] bg-gray-800" />
      <Workflows />
      <Cta />
    </>
  );
}
