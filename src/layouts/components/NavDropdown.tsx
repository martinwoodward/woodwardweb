import React, { useState } from "react";

const NavDropdown = ({ menu, pathname }: { menu: any; pathname: any }) => {
  const [showContent, setShowContent] = useState(false);

  const handleChildMenuClick = () => {
    setShowContent((prevShowContent) => !prevShowContent);
  };
  return (
    <li
      onClick={handleChildMenuClick}
      className="nav-item nav-dropdown group relative"
    >
      <span
        className={`nav-link inline-flex items-center ${menu.children
            ?.map(({ url }: { url: any }) => url)
            .includes(pathname) ||
            menu.children
              ?.map(({ url }: { url: any }) => `${url}/`)
              .includes(pathname)
            ? "active"
            : ""
          }`}
      >
        {menu.name}
        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </span>
      {menu.children?.length! > 0 && (
        <ul
          className={`nav-dropdown-list hidden lg:group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100 ${showContent && "max-lg:block"
            }`}
        >
          {menu.children?.map((child: any, index: number) => (
            <li className="nav-dropdown-item" key={index}>
              <a
                href={child.url}
                aria-label={child.name}
                className={`nav-dropdown-link block ${pathname === child.url || pathname.startsWith(`${child.url}/`)
                    ? "active"
                    : ""
                  }`}
              >
                {child.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavDropdown;
