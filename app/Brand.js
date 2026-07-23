import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

export default function Brand({ href = "/", className = "", ariaLabel = "Quiznaire home" }) {
  return (
    <Link className={`brand ${className}`.trim()} href={href} aria-label={ariaLabel}>
      <Image src={logo} alt="" priority />
      <span>QUIZNAIRE</span>
    </Link>
  );
}
