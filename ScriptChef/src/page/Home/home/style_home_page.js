const style_home_pages = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold font-roboto xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-roboto font-normal text-white text-[15px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-5 px-6",
  paddingY: "sm:py-5 py-6",
  padding: "sm:px-5 px-6 sm:py-10 py-4",

  marginX: "sm:mx-10 mx-2",
  marginY: "sm:my-10 my-2",
};

export const layout = {
  section: `flex md:flex-row flex-col ${style_home_pages.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${style_home_pages.paddingY}`,

  sectionImgReverse: `flex-1 flex ${style_home_pages.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${style_home_pages.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${style_home_pages.flexStart} flex-col`,
};

export default style_home_pages;
