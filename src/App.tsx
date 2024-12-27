import { Github, Mail, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="gradient-bg pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ProjectTeamX
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              команда талантливых разработчиков и дизайнеров, которая создает
              мобильные приложения, ориентированные на улучшение качества жизни
              пользователей. Их главное стремление — сделать технологии
              полезными и доступными каждому
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Наши Проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Жизненный Компас',
                description:
                  'Приложение помогает пользователям находить вдохновение и структурировать свою жизнь через рекомендации музыки, фильмов, событий и ведения дневника. Оно адаптируется к интересам и предпочтениям каждого пользователя, предлагая персонализированный контент',
                image:
                  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Наша Команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Александр Андросенко',
                role: 'Технический директор',
                image:
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              },
              {
                name: 'ХЗ',
                role: 'Ведущий разработчик',
                image:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              },
              {
                name: 'ХЗ',
                role: 'UI/UX дизайнер',
                image:
                  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center card-hover"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Связаться с нами
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Наши контакты</h3>
              <div className="space-y-4">
                <a
                  href="https://t.me/ProjectTeamX"
                  className="flex items-center gap-3 text-gray-600 hover:text-indigo-600"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>@ProjectTeamX</span>
                </a>
                <a
                  href="mailto:qqqq@projectteamx.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-indigo-600"
                >
                  <Mail className="h-6 w-6" />
                  <span>androsenkoleksandr6@gmail.com</span>
                </a>
                <a
                  href="https://github.com/projectteamx"
                  className="flex items-center gap-3 text-gray-600 hover:text-indigo-600"
                >
                  <Github className="h-6 w-6" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 ProjectTeamX. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
