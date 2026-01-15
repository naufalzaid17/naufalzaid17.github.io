import { Github, ExternalLink } from "lucide-react";
import { PROJECTS, TECHNOLOGIES } from '../../constants';
import { Card } from '../ui/Card';
import { getTechnologyColor } from '../../utils';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-lg font-semibold">Project {project.id}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`${getTechnologyColor(tech, TECHNOLOGIES)} px-2 py-1 rounded text-xs`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a href={project.githubUrl} className="text-blue-600 hover:text-blue-800 flex items-center">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a href={project.liveUrl} className="text-blue-600 hover:text-blue-800 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
