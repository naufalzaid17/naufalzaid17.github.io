import Image from "next/image";
import { Button } from '../ui/Button';
import { PERSONAL_INFO } from '../../constants';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <Image
                src={PERSONAL_INFO.profileImage}
                alt={`${PERSONAL_INFO.name} profile`}
                width={160}
                height={160}
                className="mx-auto rounded-full border-4 border-white shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-2">
            {PERSONAL_INFO.name}
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-6">
            {PERSONAL_INFO.title}
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {PERSONAL_INFO.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button href="#contact" size="lg">
              Get In Touch
            </Button>
            <Button href="#projects" variant="outline" size="lg">
              View My Work
            </Button>
          </div>

          <div className="mt-12">
            <a
              href="#about"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors animate-bounce"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="ml-2">Scroll to learn more</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
