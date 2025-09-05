import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/Hero"), { ssr: true });

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
