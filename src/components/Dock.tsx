import {
  IconHome,
  IconUser,
  IconBriefcase2,
  IconSchool,
  IconNews,
  IconBrandGithub,
  IconAddressBook,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Dock = () => {
  const buttons = [
    { id: "Home", label: <IconHome size={28} stroke={1.5} />, link: "/" },
    { id: "About", label: <IconUser size={28} stroke={1.5} />, link: "/" },
    {
      id: "Experience",
      label: <IconBriefcase2 size={28} stroke={1.5} />,
      link: "/",
    },
    {
      id: "Education",
      label: <IconSchool size={28} stroke={1.5} />,
      link: "/",
    },
    {
      id: "Publications",
      label: <IconNews size={28} stroke={1.5} />,
      link: "/",
    },
    {
      id: "Projects",
      label: <IconBrandGithub size={28} stroke={1.5} />,
      link: "/",
    },
    {
      id: "Contact",
      label: <IconAddressBook size={28} stroke={1.5} />,
      link: "/",
    },
  ];
  return (
    <div className="z-40 fixed bottom-0 left-1/2 -translate-x-1/2 mb-2 flex w-fit rounded-full p-2.5 gap-2 backdrop-blur-xl bg-white/40 border border-white/60 shadow-lg transition-all duration-500">
      {buttons.map((button) => (
        <Link
          key={button.id}
          to={button.link}
          className="relative group bg-white/60 hover:bg-white/90 text-black/70 hover:text-black
           p-3 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center
           backdrop-blur-sm shadow-sm hover:shadow-md"
          aria-label={button.id}
        >
          {button.label}
        </Link>
      ))}
    </div>
  );
};

export default Dock;
