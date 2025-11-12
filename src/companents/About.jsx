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
        นฤดล จันทร์รุ่งกระจ่าง แมน <br />
        05-12-2543<br />
      </p>
      <p className="mt-4 max-w-x1 mx-auto text-gray-700">
        <b>การศึกษา</b><br />
        - ร.ร.วัดหนองชิ่ม : อนุบาลปีที่ 1 - ประถมปีที่ 1 <br />
        - ร.ร.วัดไผ่ล้อม(อินทก์อุทัย) : ประถมปีที่ 2 - มัธยมปีที่ 3<br />
        - วิทยาลัยเทคนิคจันทบุรี : เทคนิคคอมฯ(ปวช.) - เทคโนโลยีคอม(ปวส.)
      </p>
      <div className="mt-4 max-w-x1 mx-auto text-gray-700">
        <div className="text-xl font-semibold">ประสบการณ์ทำงาน</div>
        <p className="flex justify-center">
          <ul className="list-inside list-disc text-left">
            <li>(ฝึกงาน ปวส.)มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก วิทยาเขตจันทบุรี</li>
            <li>บริษัท นิวแมน จำกัด จันทบุรี : พนักงานฝ่ายบริการลูกค้า 2 ปี</li>
            <li>บริษัท อิสระการเกษตร จำกัด : พนักงานยกของส่งของ 1 ปี</li>
            <li>สำนักงานก่อสร้างชลประทานขนาดใหญ่ที่ 14 : พนักงานคอมพิวเตอร์ ปัจจุบัน</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default About;
