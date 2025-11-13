import { useLanguage } from "../languages/LanguageProvider";

const HeroSect = () => {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <section
      className="relative h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/man-pic.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white p-8 flex item-center justify-center flex-col text-center h-full">
        
        <h1 className="text-4xl font-bold mb-1">{t.hello}</h1>
        <p className="text-lg">{t.herodesc}</p>
        <a href="#contact" className="mt-6 mx-auto bg-white text-blue-500 px-6 py-2 rounded-md shadow-md hover:bg-gray-200">
          {t.contact}
        </a>
      </div>
      <div className="text-white absolute item-center justify-center bottom-0 text-center w-full mb-16">
        {t.heroscrolldown}<br />v
      </div>
    </section>
  );
};

export default HeroSect;
