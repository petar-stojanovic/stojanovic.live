import ContactInfo from "@/app/_components/ContactInfo";
import ProfileInfo from "@/app/_components/ProfileInfo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col gap-14">
      <ProfileInfo />
      <ContactInfo />

      <section>
        <h2 className="text-center font-semibold text-2xl sm:text-left lg:text-3xl">
          Skills
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-1">
          <div className="group">
            <div className="border border-neutral-800 bg-zinc-950">
              <Image
                src="/skills/angular.svg"
                width={48}
                height={48}
                alt="Angular"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center font-semibold text-2xl sm:text-left lg:text-3xl">
          Projects
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-1">
          <li>asd</li>
        </ul>
      </section>
    </div>
  );
}
