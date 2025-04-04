import { socialLinks } from "./data";
import { Signature } from "./signature";
import "./styles.scss";

export function Footer() {
  return (
    <div className="footer section rel section-padding section-bottom-br section-primary-bg">
      <div className="section-wrapper">
        <div className="icons">
          {socialLinks.map((item) => (
            <a target="_blank" href={item.href} key={item.id}>
              {<item.icon />}
            </a>
          ))}
        </div>
        <div className="signature">
          <Signature />
        </div>
      </div>
    </div>
  );
}
