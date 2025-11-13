import { useLanguage } from "../languages/LanguageProvider";

const Projects = () => {
    const { t } = useLanguage();
    const images = [
      {id : 1, src: "/certificate-1.svg", header: "เรียนถ่ายรูปสวยด้วยกล้อง Mirrorless + Lightroom ปรับโทนสีด้วยตัวเอง", description: "FutureSkill"},
      {id : 2, src: "/certificate-2.svg", header: "ออกแบบ Infograpic และPoster สำหรับขายสินค้าออนไลน์ ง่ายๆด้วยตัวเอง", description: "FutureSkill"},
      {id : 3, src: "/certificate-3.webp", header: "เกียรติบัตรชนะเลิศ ทักษะการพัฒนามัลติมีเดียแบบหลายมิติ", description: "การประชุมวิชาการองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย"},
      {id : 4, src: "/draw-1.webp", header: "Mirai Fanart", description: "งานอดิเรก"},
    ]

  return (
    <section id="projects" className="py-16 px-8 scroll-mt-18">
      <h2 className="text-3xl font-bold text-center">{t.project}</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Project */}
        {images.map((images) => (
          <figure key={images.id} className="bg-white p-4 shadow-md rounded-lg">
            <img src={images.src} alt="img.description" className="w-full rounded-md" />
            <h3 className="text-xl font-semibold mt-2">{images.header}</h3>
            <figcaption className="mt-2 text-gray-600">
              {images.description}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Projects;
