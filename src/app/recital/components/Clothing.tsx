import Image from "next/image";
import type { StaticImageData } from "next/image";
import accesorios from "../../../../public/images/recital/accesorios.png";
import pantalones from "../../../../public/images/recital/pantalones.png";
import calzado from "../../../../public/images/recital/calzado.png";
import Link from "next/link";

const ClothingCard = ({ title, src }: { title: string; src: StaticImageData }) => {
  return (
    <div className="flex flex-col items-center mb-4 ">
        <Image
          src={src}
          alt={title}
          className="mx-auto w-full drop-shadow-[2px_2px_1px_rgba(0,0,0,0.15)] rounded-md hover:drop-shadow-[4px_4px_4px_rgba(0,0,0,0.4)]"
        />
      <p className="text-sm sm:text-lg font-bold text-center mt-2">{title}</p>
    </div>
  );
};

const clothingItems = [
  { title: "ACCESORIOS", src: accesorios, srcSet: 'accesorios' },
  { title: "PANTALONES", src: pantalones, srcSet: 'pantalones' },
  { title: "CALZADOS", src: calzado, srcSet: 'calzado' },
];

export default function Clothing() {
  return (
      <div className="grid grid-cols-3 gap-0.5 flex-wrap 
      sm:max-w-[90dvw] sm:gap-4
      lg:max-w-[70dvw] lg:gap-4">
        {clothingItems.map((item) => (
          <Link href={`/recital/${item.srcSet}`} key={item.title} className="flex flex-col items-center">
            <ClothingCard title={item.title} src={item.src} />
          </Link>
        ))}
      </div>
  );
}