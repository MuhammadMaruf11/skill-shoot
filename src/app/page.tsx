import Addvertise from "@/components/Advertise/Addvertise";
import Banner from "@/components/Banner/Banner";
import CTO from "@/components/CTO/CTO";
import LetUs from "@/components/LetUs/LetUs";
import PopularCourse from "@/components/PopularCourse/PopularCourse";
import Subscribe from "@/components/Subscribe/Subscribe";
import Testimonial from "@/components/Testimonial/Testimonial";
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
      <LetUs />
      <CTO />
      <Subscribe />
      <Testimonial />
    </main>
  );
}
