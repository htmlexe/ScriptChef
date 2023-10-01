import { article } from "../constants";
import style_home_pages from "../style_home_page";
import ArticleCard from "./ArticleCard";

const Clients = () => (
  <section
    id="clients"
    className={`${style_home_pages.paddingY} ${style_home_pages.flexCenter} flex-col relative h-[100vh]`}
    style_home_page={{ backgroundColor: "white" }}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[60%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${style_home_pages.heading2} text-center text-[#2E343F]`}>
        Đọc thêm
      </h2>
    </div>

    <div className="flex flex-wrap sm:justify-center w-full article-container relative z-[1]">
      {article.map((card) => (
        <div key={card.id} className="card-margin">
          <ArticleCard {...card} />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
