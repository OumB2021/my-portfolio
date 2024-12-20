import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <p className="flex items-center font-extrabold text-2xl text-zinc-300 hover:text-zinc-100 transition-colors leading-none">
        OumB
        <span className="text-5xl relative bottom-2">.</span>
      </p>
    </Link>
  );
}

export default Logo;
