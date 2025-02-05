import { useLanguage } from "../languages/LanguageProvider";

const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <nav>
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-x1 font-bold">{t.title}</div>

        <ul className="flex space-x-4">
          <li>
            <a href="#projects" className="hover:text-blue-500">
              {t.navhome}
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500">
              {t.about}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              {t.contact}
            </a>
          </li>
          <li>
            <button onClick={toggleLanguage} className="hover:text-blue-500">
              {lang === "en" ? "ไทย" : "EN"}
            </button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
