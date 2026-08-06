import Image from "next/image";
import Link from "next/link";

export default function Brand({ href = "/", className = "", ariaLabel = "Quiznaire home" }) {
  return (
    <Link className={`brand ${className}`.trim()} href={href} aria-label={ariaLabel}>
      <Image src="/logo.png" width={42} height={42} alt="" priority />
      <span>QUIZNAIRE</span>
    </Link>
  );
}
