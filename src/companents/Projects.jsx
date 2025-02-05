import { useLanguage } from "../languages/LanguageProvider";

const Projects = () => {
    const { t } = useLanguage();
  return (
    <section id="projects" className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center">{t.project}</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Project */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Project Name</h3>
          <p className="mt-2 text-gray-600">
            A short description of the project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
