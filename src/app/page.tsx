import Addvertise from "@/components/Advertise/Addvertise";
import Banner from "@/components/Banner/Banner";
import PopularCourse from "@/components/PopularCourse/PopularCourse";
import Trusted from "@/components/Trusted/Trusted";
import WhyWeDo from "@/components/WhyWeDo/WhyWeDo";

export default function Home() {
  return (
    <main>
      <Banner />
      <Trusted />
      <Addvertise />
      <WhyWeDo />
      <PopularCourse />
    </main>
  );
}
