import { PERSONAL_INFO } from '../../constants';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2024 {PERSONAL_INFO.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};
