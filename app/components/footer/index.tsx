import { socialLinks } from "./data";
import "./styles.scss";

export function Footer() {
  return (
    <div className="footer section rel section-padding section-bottom-br section-primary-bg">
      <div className="efooter-bg" />
      <div className="section-wrapper">
        <div className="icons">
          {socialLinks.map((item) => (
            <a target="_blank" href={item.href} key={item.id}>
              {<item.icon />}
            </a>
          ))}
        </div>
        <div className="slash slash-small">
          Copyright © 2022-2025, Ankit Kumar
        </div>
      </div>
    </div>
  );
}
