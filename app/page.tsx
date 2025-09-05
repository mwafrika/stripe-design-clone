import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/Hero"), { ssr: true });
const Features = dynamic(() => import("./components/Features"), { ssr: true });

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}
