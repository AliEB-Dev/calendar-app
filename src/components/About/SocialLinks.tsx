import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoPaperPlane,
} from "react-icons/io5";
import SocialLink from "./SocialLink";

function SocialLinks() {
  return (
    <section className="mt-8">

      <div className="flex flex-col gap-1">
        <SocialLink
          href="https://github.com/AliEB-Dev"
          icon={IoLogoGithub}
          label="GitHub"
        />

        <SocialLink
          href="https://t.me/PersianJs"
          icon={IoPaperPlane}
          label="Telegram"
        />

        <SocialLink
          href="https://instagram.com/aliebdev"
          icon={IoLogoInstagram}
          label="Instagram"
        />

        <SocialLink
          href="https://linkedin.com/in/alieb-dev"
          icon={IoLogoLinkedin}
          label="LinkedIn"
        />
      </div>
    </section>
  );
}

export default SocialLinks;