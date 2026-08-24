import { H1, H2, H3 } from "@/components/ui/Heading";

export const metadata = { title: "About Us — CDBS" };

export default function AboutUsPage() {
  return (
    <div>
      <div className="bg-[#F5E1DB] py-20 text-center px-4">
        {/* TODO: add hero image from public/images/about-us/ */}
        <H1>About CDBS Dance Studio</H1>
        <p className="mt-3 text-[#13292A]/70 max-w-xl mx-auto">
          Passion for dance, excellence in every step.
        </p>
      </div>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <H2 className="mb-6">Our Story</H2>
        <p className="text-[#13292A]/80 max-w-2xl">
          {/* TODO: add real studio story */}
          Placeholder: Founded with a love for dance, CDBS has been nurturing talent and
          fostering community through movement and artistry.
        </p>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <H2 className="mb-8 text-center">Meet the Team</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Director", "Ballet Instructor", "Hip-Hop Coach", "Jazz Instructor"].map((role) => (
            <div key={role} className="rounded-xl bg-[#F2C9D8] p-6 text-center shadow-sm">
              {/* TODO: add team member photo from public/images/about-us/ */}
              <div className="w-20 h-20 rounded-full bg-[#E996B4]/40 mx-auto mb-3" />
              <H3>{role}</H3>
              <p className="text-xs text-[#13292A]/60 mt-1">Name Placeholder</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
