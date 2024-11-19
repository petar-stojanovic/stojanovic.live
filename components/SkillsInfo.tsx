import Image from "next/image";

const SkillsInfo = () => {
  return (
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
  );
};

export default SkillsInfo;
