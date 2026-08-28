import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Button from "./ui/Button";
import Link from "next/link";

type Variant = "right" | "left" ;
type Order = "first" | "second";

interface MobileClassProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  order?: Order;
  width?: string;
  src?: string | StaticImageData;
  children: React.ReactNode;
  link: string;
}

const variantClasses: Record<Variant, string> = {
  right: "rotate-2",
  left: "-rotate-2",
};

const orderClasses: Record<Order, string> = {
  first: "order-first",
  second: "order-second",
};

export default function MobileClass({
  variant = "right",
  order = "first",
  width,
  src,
  children,
  link,
  className = "",
  ...props
}: MobileClassProps) {
  return (
    <div className={"w-full flex min-h-[75dvw] justify-center relative left-0 text-shadow-2xs [word-spacing:0.5rem]"}
      {...props}
    >
        <div className={`absolute bg-peach w-full py-4 ${variantClasses[variant]}`}>
            <h1 className="h2 w-full text-center md:text-start md:max-w-7xl text-shadow-2xs [word-spacing:0.5rem]">
                {children}
            </h1>            
        </div>
        <div className={`flex w-full justify-between items-center px-4 relative z-20 ${orderClasses[order]}`}>
            <Image src={src ?? "/path/to/image.jpg"} alt={`${children}`} className={[`${width ?? ""}`, className].filter(Boolean).join(" ")}/>
            <Link href={link} >
              <Button size="md" className={["relative w-32! mt-4", orderClasses[order]].join(" ")}>
                  Ver clases
              </Button>            
            </Link>
        </div>

    </div>
  );
}