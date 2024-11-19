import ContactInfo from "@/components/ContactInfo";
import ProfileInfo from "@/components/ProfileInfo";
import SkillsInfo from "@/components/SkillsInfo";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col gap-14">
      <ProfileInfo />
      <ContactInfo />
      <SkillsInfo />

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
