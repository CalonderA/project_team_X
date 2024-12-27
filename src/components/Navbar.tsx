import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">ProjectTeamX</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600">Главная</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600">Проекты</a>
            <a href="#team" className="text-gray-700 hover:text-indigo-600">Команда</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Контакты</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Главная</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Проекты</a>
            <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Команда</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Контакты</a>
          </div>
        </div>
      )}
    </nav>
  );
}