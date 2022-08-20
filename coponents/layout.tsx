import React, { Children } from "react";
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div>
      <div className="bg-white w-full text-lg font-medium py-3 fixed text-gray-800 border-b top-0 flex items-center justify-center">
        {title ? <span>{title}</span> : null}
      </div>
      <div className="pt-16">{children}</div>
      {hasTabBar ? <nav></nav> : null}
    </div>
  );
}
