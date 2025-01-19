import { PropsWithChildren } from "react";

type PagesLayoutProps = PropsWithChildren<{
  header: JSX.Element;
  footer?: JSX.Element;
}>;

export const PagesLayout = ({ header, children }: PagesLayoutProps) => {
  return (
    <>
      <header>{header}</header>
      <main className="min-h-[80vh] pt-[80px]">{children}</main>
      <footer></footer>
    </>
  );
};
