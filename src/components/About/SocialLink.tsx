import type { IconType } from "react-icons";
import { IoOpenOutline } from "react-icons/io5";

interface SocialLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
     <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:bg-gray-50"
    >
      
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-50">
            <Icon size={25} />
        </div>
        <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold text-gray-800">
               {label}
            </h3>
            <p className="mt-1 truncate text-xs text-(--Primary)">
               {href}
            </p>
       </div>

      <div>

      <IoOpenOutline
        size={21}
        className="shrink-0 text-(--Primary)"
      />
      </div>
    </a>
  );
}

export default SocialLink;