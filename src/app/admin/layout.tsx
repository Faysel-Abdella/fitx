import React from "react";

import SideBar from "@/components/SideBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SideBar>
      <div>{children}</div>
    </SideBar>
  );
}
