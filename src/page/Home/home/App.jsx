import style_home_pages from "./style_home_page";
import { Business, CardDeal, Clients, Footer, Navbar, Testimonials, Hero } from "./components";

const App = () => (
  <div className="w-full bg-white w-full overflow-hidden">
    <div className={`${style_home_pages.paddingX} ${style_home_pages.flexStart}`}>
      <div className={`${style_home_pages.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-[#F4F4F4] ${style_home_pages.flexStart} custom-container`}>
      <div className={`${style_home_pages.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-white ${style_home_pages.flexStart} custom-container`}>
      <div className={`${style_home_pages.boxWidth}`}>
        <CardDeal />
        <Business />
        <Testimonials />
        <Clients />
      </div>
    </div>

    <div className={`bg-[#2E343F] ${style_home_pages.paddingX} ${style_home_pages.flexCenter}`}>
      <div className={`${style_home_pages.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
