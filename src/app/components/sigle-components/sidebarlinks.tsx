import Link from "next/link";

type MyLinksProps = {
  name: string;
  url: string;
};

export default function SideBarLinks(props: MyLinksProps) {
  return (
    <Link href={props.url} className="hover:text-gray-300 text-lg my-2 inline md:hidden lg:hidden">
      {props.name}
    </Link>
  );
}