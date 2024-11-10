import React, { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
  params: {
    storeId: string;
  };
}

export default function DashboardLayout({
  children,
  params: { storeId },
}: DashboardLayoutProps) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <p>Store ID: {storeId}</p>
      {children}
    </div>
  );
}
