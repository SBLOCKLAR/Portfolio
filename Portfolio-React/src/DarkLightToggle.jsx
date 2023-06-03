import "./DarkLightToggle.css";

export default function DarkLightToggle() {
  function toggleView() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  return (
    <label className="DarkLightToggle">
      <input onClick={toggleView} type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
}
