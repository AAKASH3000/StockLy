import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media\images\kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data,advanced charts, an elegant UI, and more. Enjoy the Kite experienceseamlessly on your Android and iOS devices."
        link1="Try demo"
        link2="Learn More"
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageUrl="media\images\console.png"
        productName="Varsity mobile"
        productDesription="The central dashboard for your Zerodha account. Gain
insights into your trades and investments with in-depth
reports and visualisations."
        link1="Learn More"
      />
      <LeftSection
        imageUrl="media\images\varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth
coverage and illustrations. Content is broken down into bite-size cards
to help you learn on the go."
        link1="Try demo"
        link2="Learn More"
        googlePlay=""
        appStore=""
      />
      <RightSection imageUrl="media\images\kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with
our super simple HTTP/JSON APIs. If you are a startup,
build your investment app and showcase it to our
clientbase."
        link1="Learn More" />
      <LeftSection
        imageUrl="media\images\coin.png"
        productName="Coine"
        productDesription="Buy plirect mutual funds online, commission-free, delivered directly to
your Demat account. Enjoy the investment experience on your Android
and iOS devices."
        link1="Try demo"
        link2="Learn More"
        googlePlay=""
        appStore=""
      />
      <p className="text-center text-muted">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      <Universe />
    </>
  );
}

export default ProductPage;
