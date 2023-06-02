import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="Navlinks">
        <li>
          <a href="index.html" className="Navlink">
            Home
          </a>
        </li>
        <li>
          <a href="PROJECTS/projectsIndex.html" className="Navlink">
            Projects
          </a>
        </li>
        <li>
          <a href="RESUME/resumeIndex.html" className="Navlink">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
