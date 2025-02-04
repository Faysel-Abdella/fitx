"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define types for clarity
interface Subtitle {
  label: string;
  route: string;
}

interface NavigationProps {
  order: string;
  mainTitle: string;
  init: string;
  firstRoute: string;
  route: string;
  icon: string;
  activeIcon: string;
  subTitles: Subtitle[];
}

const Navigation = ({
  mainTitle,
  init,
  firstRoute,
  route,
  icon,
  activeIcon,
  subTitles,
}: NavigationProps) => {
  const pathname = usePathname();

  // Determine if this nav item should be active:
  // Active if current pathname exactly matches firstRoute or includes the init string.
  const isActive = pathname === firstRoute || pathname.includes(init);

  return (
    <section>
      {/* Main Navigation Link */}
      <Link
        href={route}
        className={`flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 ${
          isActive ? "bg-activeLink" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-4">
          {/* Icon: display activeIcon if active; otherwise, default icon */}
          <div>
            <Image
              src={isActive ? activeIcon : icon}
              alt="Side bar icon"
              className={`transform transition-all ${
                isActive ? "scale-[1.2]" : "scale-100"
              }`}
            />
          </div>
          {/* Title */}
          <p
            className={`text-[16px] font-bold leading-[22px] tracking-[-2%] ${
              isActive ? "text-mainBlue" : "text-mainGray"
            }`}
          >
            {mainTitle}
          </p>
        </div>
      </Link>

      {/* Show subTitles only if there are any and the main nav is active */}
      {subTitles.length > 0 && isActive && (
        <div className="flex flex-col pl-14">
          {subTitles.map((item, index) => {
            // Determine if the subTitle link is active
            const isSubActive =
              pathname === item.route || pathname.includes(item.route);
            return (
              <Link href={item.route} key={index}>
                <div className="flex items-center">
                  <p
                    className={`text-base py-1 font-semibold ${
                      isSubActive ? "text-mainBlue font-bold" : "text-mainGray"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Navigation;
