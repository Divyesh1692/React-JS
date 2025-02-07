import React from "react";
import FeaturesCard from "./FeaturesCard";
import Title from "./title";

const Features = () => {
  return (
    <section id="features" className="cursor-hand">
      <div className="mt-[5%] ">
        <Title
          bigText="Features Of Platform"
          smallText="Features Of Platform"
        />
      </div>

      <div className="relative flex flex-col mt-[5%] z-20  gap-[1.5%] md:gap-[1%] md:w-[90vw] mx-auto">
        <FeaturesCard
          img="/images/f1.png"
          title="Create your Artist Website"
          desc="It is a simple platform that helps artists show their work, connect with people, and grow online. Whether you're a painter, photographer, sculptor, or digital artist, it gives you everything you need to create a beautiful and professional website."
        />
        <FeaturesCard
          img="/images/f2.png"
          title="Engage with Community"
          desc="Engaging with a community helps artists connect with others, share their work, and find inspiration. It builds support, opens opportunities for collaboration, and provides valuable feedback to grow and stay motivated."
          imgOrder="2"
          textOrder="1"
        />

        <FeaturesCard
          img="/images/f4.png"
          title="Explore Artistic Resources "
          desc="Explore Artistic Resources is a feature or section that serves as a hub for artists to discover tools, materials, and knowledge that enhance their creative process and professional growth."
        />
      </div>
    </section>
  );
};

export default Features;
