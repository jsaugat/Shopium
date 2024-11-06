import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-secondary flex items-center justify-center h-screen">
      {children}
    </div>
  );
}
