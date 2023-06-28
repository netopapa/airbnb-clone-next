"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface AvatarProps {
  src?: string | null;
}

const Avatar = ({src}: AvatarProps) => {
  const router = useRouter();

  return (
    <Image
      alt="Avatar"
      className="rounded-full"
      height={30}
      width={30}
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
