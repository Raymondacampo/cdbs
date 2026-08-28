import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Button from "@/components/ui/Button";
import { Cake } from 'lucide-react';
import { Calendar, Clock } from "lucide-react";

type Variant = "right" | "left" | 'straight';
type Order = "first" | "second";
type Color = 'bg-peach' | 'bg-pink' | 'bg-blush' | 'bg-white';
type ImgProps = {
    src: StaticImageData | string;
    width: string;
    position?: string
}
type DayTime = {
    day: string;
    time: string;
}
type DayTimeProps = {
    dayTimes: Array<DayTime>
}
type AgeProps = {
    age: string;
    icon: React.ReactNode;
}

interface ClassProps extends React.HTMLAttributes<HTMLDivElement> {
    children: string;
    bannercolor: Color;
    variant?: Variant;
    bg: Color;
    img: ImgProps;
    dayTime: DayTimeProps;
    age: AgeProps;
    order: Order;
    description: string;
    phone?: string;
    desktop?: string;
    centerText?: string;
}

const variantClasses: Record<Variant, string> = {
  right: "rotate-0 md:rotate-1",
  left: "rotate-0 md:-rotate-1",
  straight: "",
};

const orderClasses: Record<Order, string> = {
  first: "justify-start lg:justify-center",
  second: "justify-end lg:justify-center",
  
};

export default function Class({
    centerText,
    phone,
    desktop,
    children,
    bannercolor,
    variant ="straight",
    bg = 'bg-pink',
    img,
    dayTime,
    age,
    description,
    order = "first",
  ...props
}: ClassProps) {
  return (
    <div className={"w-full flex min-h-[55dvh] md:justify-center relative left-0 text-shadow-2xs [word-spacing:0.5rem] " + bg }
      {...props}
    >
        <div className={`absolute ${bannercolor} ${variantClasses[variant]} shadow-lg w-full py-4 flex md:justify-center ${order === "first" ? "justify-start" : "justify-end"}`}>
            <h1 className={`font-bold text-3xl md:text-5xl lg:text-7xl w-full md:w-auto text-center  text-shadow-2xs [word-spacing:0.5rem] ${centerText ?? ""}`}>
                {children}
            </h1>            
        </div>

        <div className={`flex items-center lg:max-w-4xl p-2 w-full relative z-20 ${orderClasses[order]} `}>
            <Image src={img.src ?? "/path/to/image.jpg"} alt={`${children}`} className={[`${img.width ?? ""} ${order === "first" ? "order-1" : "order-2"} `, img.position ?? ""].filter(Boolean).join(" ")}/>
            
            <div className={`relative flex flex-col items-center  ${order === "first" ? "order-2" : "order-1"}
            ${phone} ${desktop ?? ""}
            `}>
                <div className="flex gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Calendar className={`w-6 h-6 md:w-8 md:h-8`} />
                        <div className="flex flex-col gap-1">
                                {dayTime.dayTimes.map(dt => 
                                <div className="flex flex-col " key={dt.day}>
                                    <p className={`text-xs md:text-xl ${bannercolor === 'bg-peach' ? 'text-shadow:1.5px_1.5px_1px_rgba(0,0,0,0.5)' : ''} max-w-xl font-bold [word-spacing:2px]`}>{`${dt.day}`}</p>
                            </div>)}
                        </div>                    
                    </div>
                    <div className="flex flex-col items-center gap-4 ">
                        <Clock className={`w-6 h-6 md:w-8 md:h-8`} />
                        <div className="flex flex-col gap-1">{dayTime.dayTimes.map(dt => 
                            <div className="flex flex-col" key={dt.day}>
                                <p className={`text-xs md:text-xl ${bannercolor === 'bg-peach' ? 'text-shadow:1.5px_1.5px_1px_rgba(0,0,0,0.5)' : ''} max-w-xl font-bold [word-spacing:2px]`}>{`${dt.time}`}</p>
                            </div>)}
                        </div>                    
                    </div>                    
                </div>
                <div className="flex items-end gap-2 mt-4 md:mt-8">
                    <Cake className="w-5 h-5" />
                    <p className={`text-xs md:text-xl ${bannercolor === 'bg-peach' ? 'text-shadow:1.5px_1.5px_1px_rgba(0,0,0,0.5)' : ''} max-w-xl font-bold [word-spacing:2px]`}>{age.age}</p>
                </div>

                <Button size="md" className="w-32! h-10 mt-4">
                    Inscribirme!
                </Button>  
                <p className={`text-center text-xs md:text-base mt-4 ${bannercolor === 'bg-peach' ? 'text-shadow:1.5px_1.5px_1px_rgba(0,0,0,0.4)' : ''}`}>{description}</p>              
            </div>

        </div>

    </div>
  );
}