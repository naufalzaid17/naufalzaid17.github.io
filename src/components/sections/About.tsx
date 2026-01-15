import { TECHNOLOGIES, PERSONAL_INFO } from '../../constants';
import { getTechnologyColor } from '../../utils';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I love turning ideas into reality through code and design
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {PERSONAL_INFO.about.story}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {PERSONAL_INFO.about.additional}
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Technologies I Work With</h4>
              <div className="flex flex-wrap gap-2">
                {TECHNOLOGIES.map((tech) => (
                  <span
                    key={tech.name}
                    className={`${getTechnologyColor(tech.name, TECHNOLOGIES)} px-3 py-1 rounded-full text-sm`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
