import style_home_pages, { layout } from "../style_home_page";
import { logo_partner_01, logo_partner_02, logo_partner_03, logo_partner_04 } from "../assets";

const CardDeal = () => (
  <section
    className={`${style_home_pages.paddingY} ${style_home_pages.flexCenter} flex-col relative h-[100vh]`}
    style_home_page={{ backgroundColor: "white" }}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[60%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col relative z-[1] mb-10">
      <h2 className={`${style_home_pages.heading2} text-center text-[#2E343F]`}>
        Đối tác của chúng tôi
      </h2>
    </div>

    <div className={`flex flex-wrap justify-center items-center ${style_home_pages.cardContainer}`}>
      {/* Card 1 */}
      <div className="card">
        <img src={logo_partner_01} alt="Logo 1" className={`${style_home_pages.cardImage}`} />
      </div>

      {/* Card 2 */}
      <div className="card">
        <img src={logo_partner_02} alt="Logo 2" className={`${style_home_pages.cardImage}`} />
      </div>

      {/* Card 3 */}
      <div className="card">
        <img src={logo_partner_03} alt="Logo 3" className={`${style_home_pages.cardImage}`} />
      </div>

      {/* Card 4 */}
      <div className="card">
        <img src={logo_partner_04} alt="Logo 4" className={`${style_home_pages.cardImage}`} />
      </div>
    </div>
  </section>
);

export default CardDeal;
