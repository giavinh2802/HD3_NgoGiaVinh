import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import Slider from "../components/homeComponents/Slider";
import Toast from "../components/LoadingError/Toast";

const HomeScreen = ({match}) => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Toast />
      {/* <Header /> */}
      <Slider/>
      <ShopSection/>
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
