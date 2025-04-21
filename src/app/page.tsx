import Announcement from "./components/announcement";
import Clients from "./components/clients";
import Coach from "./components/coach";
import Fitness from "./components/fitness";
import Footer from "./components/footer";
import Goals from "./components/goals";
import Header from "./components/header";
import Hero from "./components/hero";
import Line from "./components/line";
import Line2 from "./components/line2";
import Services from "./components/services";
import Success from "./components/success";

export default function Home() {
  return (
    <div>
      <Announcement/>
      <Header/>
      <Hero/>
      <Line/>
      <Fitness/>
      <Coach/>
      <Success/>
      <Services/>
      <Goals/>
      <Line2/>
      <Clients/>
      <Footer/>
    </div>
  );
}
