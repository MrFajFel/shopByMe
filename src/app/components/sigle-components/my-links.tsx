import Link from "next/link";

type MyLinksProps = {
  name: string;
  url: string;
};

export default function MyLinks(props: MyLinksProps) {
  return (
    <Link href={props.url} className="hover:text-gray-300">
      {props.name}
    </Link>
  );
}