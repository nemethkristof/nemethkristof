import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 dark:text-white">My Portfolio</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="hero" smooth={true} duration={500} className="text-gray-800 dark:text-white hover:text-blue-500">
              Hero
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500} className="text-gray-800 dark:text-white hover:text-blue-500">
              Education
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500} className="text-gray-800 dark:text-white hover:text-blue-500">
              Work
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="text-gray-800 dark:text-white hover:text-blue-500">
              My Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="text-gray-800 dark:text-white hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;