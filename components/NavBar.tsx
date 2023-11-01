import Link from "next/link";

const links = [
  { href: "/", name: "Hjem" },
  { href: "/program", name: "Program" },
];

export default function NavBar() {
  return (
    <div className="flex flex-row gap-5 p-4 bg-blue text-white">
      {links.map((link, index) => (
        <ul key={index}>
          <Link
            className="text-xl hover:border-b-4 hover:border-orange"
            href={link.href}
          >
            {link.name}
          </Link>
        </ul>
      ))}
    </div>
  );
}
