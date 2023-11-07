import SkillList from "../SkillList";

export default function Skills() {
  return (
    <section id="skills" className="px-4 lg:px-0 py-20">
      <div className="max-w-6xl m-auto">
        <h2 className="text-4xl">Habilidades</h2>

        <p className="my-6">
          Essas são as linguagens e ferramentas que tenho familiaridade e
          experiência.
        </p>

        <SkillList />
      </div>
    </section>
  );
}
