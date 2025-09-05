import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/Hero"), { ssr: true });
const Features = dynamic(() => import("./components/Features"), { ssr: true });
const BusinessTypes = dynamic(() => import("./components/BusinessTypes"), {
  ssr: true,
});
const Enterprise = dynamic(() => import("./components/Enterprise"), {
  ssr: true,
});

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <BusinessTypes />
      <Enterprise />
    </main>
  );
}
