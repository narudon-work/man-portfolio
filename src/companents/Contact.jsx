import { useLanguage } from "../languages/LanguageProvider";

const Contact = () => {
    const { t } = useLanguage();
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold">{t.contact}</h2>
    <p className="mt-4">
    ฟอร์มหรือ Social Media
    </p>
      <p className="mt-4">Feel free to reach out via email or social media.</p>
    </section>
  );
};

export default Contact;
