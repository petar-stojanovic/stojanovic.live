import Image from "next/image";

const SkillsInfo = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-center font-semibold text-2xl sm:text-left lg:text-3xl">
        Skills
      </h2>

      <div className="group relative w-fit">
        <div className="rounded-xl border border-neutral-800 bg-zinc-100 p-1 duration-200 ease-in-out hover:border-neutral-700 hover:bg-zinc-900 dark:bg-zinc-900">
          <div className="rounded-lg bg-red-300/25 p-2">
            <Image
              src="/skills/angular.svg"
              width={48}
              height={48}
              alt="Angular"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 left-0 z-10 mt-2 w-fit justify-center rounded-xl border border-neutral-800 bg-zinc-950 px-4 py-1 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          Angular
        </div>
      </div>

      <div className="group relative w-fit">
        <div className="rounded-xl bg-zinc-100 p-1 duration-200 ease-in-out hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800">
          <Image
            src="/skills/angular.svg"
            width={48}
            height={48}
            alt="Angular"
          />
        </div>
        <div className="pointer-events-none absolute right-0 left-0 z-10 mt-2 w-fit justify-center rounded-xl border border-neutral-800 bg-zinc-950 px-4 py-1 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          Angular
        </div>
      </div>
    </section>
  );
};

export default SkillsInfo;
