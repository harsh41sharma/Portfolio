import { socialImgs } from "../constant";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-4 mt-10 border-t border-gray-200">
      <div className="container mx-auto flex justify-center">
        <p className="text-sm text-center">Terms & Conditions</p>
      </div>
      <div className="flex items-center justify-center gap-5 mt-5">
        {socialImgs.map((socialImg, index) => (
          <a
            key={index}
            href={socialImg.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 bg-gray-100 flex justify-center items-center rounded-xl size-10 md:size-12 cursor-pointer transition-all duration-500 hover:bg-purple-100"
          >
            <img
              src={socialImg.imgPath}
              alt="social icon"
              className="inline-block w-5 h-5 md:w-6 md:h-6"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
