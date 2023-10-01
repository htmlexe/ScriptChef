import style_home_pages from "../style_home_page";
import { thuc_tien } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className={"flex md:flex-row flex-col items-center h-[740px]"}
      style_home_page={{ backgroundColor: "#F4F4F4" }}
    >
      <div
        className={`flex-1 ${style_home_pages.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-roboto font-bold text-[64px] text-[#060640] leading-[75px] mb-10">
            Khám phá nghề nghiệp phù hợp với bạn{" "}
            <br className="sm:block hidden" />{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          </div>
        </div>

        <p className={`font-roboto font-normal text-black text-[15px] leading-[30.8px] max-w-[470px] mt-5`}>
          Bạn muốn sở hữu bộ kỹ năng cần thiết phục vụ công việc hàng ngày? Hãy
          làm bài kiểm tra nhanh của chúng tôi ngay bây giờ để mở khóa sự nghiệp
          mong muốn và bắt đầu hành trình chinh phục ước mơ!!
        </p>

        <Button style_home_pages={`mt-10`} />
      </div>

      <div
        className={`flex-1 flex ${style_home_pages.flexCenter} md:my-0 my-10 relative`}
      >
        <div className="image-container">
          <img
            src={thuc_tien}
            className="w-[90%] h-[90%] relative z-[5]"
          />
        </div>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
};

export default Hero;
