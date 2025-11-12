import { useLanguage } from "../languages/LanguageProvider";

const About = () => {
    const { t } = useLanguage();
  return (
    <section id="about" className="py-16 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold">{t.about}</h2>
      <p className="mt-4 max-w-xl mx-auto text-gray-700">
      ข้อมูลเกี่ยวกับตัวเอง + ทักษะ
        </p>
      <p className="mt-4 max-w-xl mx-auto text-gray-700">
        ทดสอบ
      </p>
    </section>
  );
};

export default About;
