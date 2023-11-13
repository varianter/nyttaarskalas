import Link from "next/link";

const links = [
  { href: "/", name: "Hjem" },
  { href: "/info", name: "Info" },
  { href: "/kontakt", name: "Kontakt" },
  { href: "/paamelding", name: "Påmelding" },
  
];
export default function NavBar() {
  return (
    <div className="flex flex-row gap-5 p-4 bg-blue text-white bg-dark_purple">
      {links.map((link, index) => (
        <ul key={index}>
          <Link
            className="text-xl hover:border-b-4 hover:border-light_teal"
            href={link.href}
          >
            {link.name}
            
          </Link>
        </ul>
      ))}
    </div>
  );
}
