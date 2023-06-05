import "./Toolbar.css";

export default function Toolbar() {
  const tools = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "SASS",
    "Node.js",
    "Git",
    "VSCode",
    "GitHub",
    "GitLab",
    "Asana",
  ];
  return (
    <div className="Toolbox">
      {tools.map((tool) => (
        <span key="{tool}" className="Toolbar">
          {tool}
        </span>
      ))}
    </div>
  );
}
