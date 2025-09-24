import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <>
      <Link href="/" className="flex items-center gap-4 z-10">
        <Image
          src="/timber-halo-dark.png"
          height="100"
          width="100"
          alt="The Wild Oasis logo"
        />
        {/* <span className="text-xl font-semibold text-primary-100">
          Timber Halo
        </span> */}
      </Link>
    </>
  );
}

export default Logo;
