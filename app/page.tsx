import ContactInfo from "@/components/ContactInfo";
import ExperienceInfo from "@/components/ExperienceInfo";
import ProfileInfo from "@/components/ProfileInfo";
import ProjectsInfo from "@/components/ProjectsInfo";
import SkillsInfo from "@/components/SkillsInfo";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col gap-14">
      <ProfileInfo />
      <ContactInfo />
      <SkillsInfo />
      <ExperienceInfo />
      <ProjectsInfo />
    </div>
  );
}
