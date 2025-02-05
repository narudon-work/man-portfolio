import { useLanguage } from "../languages/LanguageProvider";

const HeroSect = () => {
const { lang, toggleLanguage, t } = useLanguage();

  return (
    <section className="text-center py-20 bg-blue-500 text-white">
      <h2 className="text-4x1 font-bold">{t.hello}</h2>
      <p className="text-lg">{t.herodesc}</p>
      <a
        href="#contact"
        className="mt-6 inline-block bg-white text-blue-500 px-6 py-2 rounded-md shadow-md hover:bg-gray-200"
      >
        {t.contact}
      </a>
    </section>
  );
};

export default HeroSect;
