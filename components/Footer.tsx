import { LuInstagram, LuFacebook } from "react-icons/lu";
import { RiTiktokLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/png/logo.png";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <footer className="w-full bg-(--color-beige-soft) py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Image
              src={logo}
              width={130}
              height={25}
              alt="Purenestra"
              priority
              className="w-35 h-auto"
            />
          </div>

          <div className="flex items-center justify-center text-xs text-(--color-brown-dark) font-medium leading-relaxed font-plus-jakarta-sans max-w-md mx-auto lg:mx-0">
            © {year} PureNestra · Clean, gentle, ultra-soft care for baby &
            planet.
          </div>

          <div className="flex items-center justify-center lg:justify-end gap-3">
            <SocialLink
              href="https://www.instagram.com/purenestra"
              icon={<LuInstagram size={18} />}
              label="PureNestra on Instagram"
            />
            <SocialLink
              href="https://www.tiktok.com/@purenestra"
              icon={<RiTiktokLine size={18} />}
              label="PureNestra on TikTok"
            />
            <SocialLink
              href="https://www.facebook.com/share/18eSqGsDMX/"
              icon={<LuFacebook size={18} />}
              label="PureNestra on Facebook"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-(--color-beige-muted) text-(--color-green-variant) hover:bg-[#bec4ae] hover:scale-105 transition-all duration-200"
    aria-label={label}
  >
    {icon}
  </Link>
);

export default Footer;
