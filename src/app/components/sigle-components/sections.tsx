import { ReactNode } from "react";

type SectionsProps = {
  children: ReactNode;
};

export default function Sections({ children }: SectionsProps) {
  return <section className=" mx-[5vw] my-[5vw]">{children}</section>;
}