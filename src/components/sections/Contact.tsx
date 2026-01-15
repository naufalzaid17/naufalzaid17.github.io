import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from '../ui/Button';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../../constants';
import { formatUrl } from '../../utils';

const iconMap = {
  Github,
  Linkedin,
  Mail,
};

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <div className="text-center space-y-6">
            <p className="text-gray-600">
              Feel free to reach out if you'd like to work together or just want to say hello!
            </p>
            <div className="flex justify-center space-x-6">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={formatUrl(social.url)}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
            <div className="pt-8">
              <Button href={`mailto:${PERSONAL_INFO.email}`}>
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
