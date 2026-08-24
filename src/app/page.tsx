import { H1, H2 } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
// import Image from "next/image";
// import heroImage from "../../public/images/dashboard/hero.jpg";

export default function DashboardPage() {
  return (
    <div className="min-h-[80vh]">
      {/* Hero section */}
      <section className="bg-[#F2C9D8] py-24 px-4 text-center">
        {/* TODO: replace with actual hero image */}
        {/* <Image src={heroImage} alt="Dance hero" fill className="object-cover" /> */}
        <H1 className="mb-4">Welcome to CDBS Dance Studio</H1>
        <p className="text-lg text-[#13292A]/80 mb-8 max-w-xl mx-auto">
          Inspiring movement, passion, and artistry in every step.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg">Explore Classes</Button>
          <Button size="lg" variant="outline">Visit the Store</Button>
        </div>
      </section>

      {/* Classes overview */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <H2 className="text-center mb-10">Our Programs</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Ballet", "Hip-Hop & Jazz", "Others"].map((name) => (
            <div
              key={name}
              className="rounded-xl bg-[#F5E1DB] p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* TODO: add program thumbnail image */}
              <h3 className="h3 mb-2">{name}</h3>
              <p className="text-sm text-[#13292A]/70">
                Placeholder description for the {name} program.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
