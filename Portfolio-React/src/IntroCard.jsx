import "./IntroCard.css";
import Toolbar from "./Toolbar";
import SocialLinks from "./SocialLinks";

export default function IntroCard() {
  return (
    <div className="IntroCard">
      <h1 id="name">
        Sarah Beth <span id="lastName"> Locklar</span>
      </h1>
      <h2 id="jobTitle">Frontend Web Developer</h2>
      <SocialLinks />
      <p id="summary">
        {" "}
        I am a self-taught developer who has recently made the exciting
        transition from customer support roles to the world of website
        development. I am passionate about this field because it allows me to
        combine my love for creativity and problem-solving, enabling me to build
        valuable digital experiences.
      </p>
      <Toolbar />
    </div>
  );
}
