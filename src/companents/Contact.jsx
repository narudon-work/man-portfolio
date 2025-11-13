import { useLanguage } from "../languages/LanguageProvider";
import { AiFillAlert } from "react-icons/ai";
import { FaFacebookSquare, FaLine } from "react-icons/fa";

const Contact = () => {
    const { t } = useLanguage();
  return (
    <section id="contact" className="py-8 text-center">
      <h2 className="text-3xl font-bold flex justify-center"><AiFillAlert />{t.contact}</h2>

      <div className="flex justify-center max-w-screen-xl mx-auto p-4 flex-col items-center sm:flex-row">
        
        <div className="flex space-x-5 items-center text-3xl">
          <a href="https://www.facebook.com/mannarudon" target="_blank" rel="noopener noreferrer"><i><FaFacebookSquare /></i></a>
          <a href="https://line.me/ti/p/NepLDDyWR" target="_blank" rel="noopener noreferrer"><i><FaLine /></i></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
