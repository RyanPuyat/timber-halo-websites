import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <>
      <Link href="/" className="flex items-center gap-4 z-10">
        <Image
          src="/timber-halo-dark.png"
          height="80"
          width="80"
          alt="The Wild Oasis logo"
        />
      </Link>
    </>
  );
}

export default Logo;
