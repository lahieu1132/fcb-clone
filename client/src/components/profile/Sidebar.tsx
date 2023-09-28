import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import DiamondIcon from "@mui/icons-material/Diamond";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LogoutIcon from "@mui/icons-material/Logout";

interface listSidebarProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  path: string;
}

const listSidebar: listSidebarProps[] = [
  {
    title: "MY BARCA",
    icon: (active: boolean) => (
      <DiamondIcon sx={{ color: active ? "#fdc52c" : "#000" }} />
    ),
    path: "/profile",
  },
  {
    title: "CONFIGURATION",
    icon: (active: boolean) => (
      <PersonIcon sx={{ color: active ? "#fdc52c" : "#000" }} />
    ),
    path: "/profile/configuration",
  },
  {
    title: "FAVOURITES",
    icon: (active: boolean) => (
      <StarIcon sx={{ color: active ? "#fdc52c" : "#000" }} />
    ),
    path: "/profile/favourites",
  },
  {
    title: "GIFT BARÇA",
    icon: (active: boolean) => (
      <CardGiftcardIcon sx={{ color: active ? "#fdc52c" : "#000" }} />
    ),
    path: "/profile/gift-barca",
  },
  {
    title: "Log out",
    icon: (active: boolean) => (
      <LogoutIcon sx={{ color: active ? "#fdc52c" : "#000" }} />
    ),
    path: "/",
  },
];

function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const onMouseEnter = () => setOpen(true);
  const onMouseLeave = () => setOpen(false);

  return (
    <nav
      className='flex flex-col fixed left-0 top-0 bottom-0 w-20 bg-[#fdc52c] px-4 py-5 hover:w-[211px] z-50'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>
        <Link to={"/"}>
          {open ? (
            <img
              src='https://culers.fcbarcelona.com/assets/images/logos/Black@1,5x.svg'
              alt='fcbarcelona fan'
              className='w-full h-[46px]'
            />
          ) : (
            <img
              src='https://culers.fcbarcelona.com/assets/images/logos/Black@2x.svg'
              alt='fcbarcelona fan'
              className='w-[46px] h-[46px]'
            />
          )}
        </Link>
      </div>
      <div className='flex-1 flex'>
        <ul className='mt-[60px] flex-1 mb-0 mx-auto flex flex-col flex-wrap'>
          {listSidebar.map((item: listSidebarProps, index: number) => {
            return (
              <li
                className={`${index == listSidebar.length - 1 && "mt-auto"}  
                mb-1`}
              >
                <NavLink
                  to={item.path}
                  key={index}
                  className={({ isActive, isPending }) => {
                    setActiveIndex(isActive ? index : 0);
                    return `${
                      isPending ? "pending" : isActive ? "bg-black" : ""
                    } ${open ? "justify-start pl-3" : "justify-center"}
                      mb-1 w-full flex gap-1 items-center h-[46px] rounded-full `;
                  }}
                >
                  {item.icon(activeIndex == index)}
                  {open && (
                    <span
                      className={`font-bold ${
                        activeIndex == index ? "text-[#fdc52c]" : "text-black"
                      }`}
                    >
                      {item.title}
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
