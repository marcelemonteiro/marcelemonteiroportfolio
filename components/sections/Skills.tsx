import SkillList from "../SkillList";

export default function Skills() {
  return (
    <section id="skills" className="px-4 lg:px-0 py-20">
      <div className="max-w-6xl m-auto">
        <h2 className="text-4xl">Habilidades</h2>

        <p className="my-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque est
          libero eius natus ducimus, modi dolor laborum? Fuga, nemo id. Sed quos
          ducimus nesciunt magni dolores rem earum recusandae dolorum!
        </p>

        <SkillList />
      </div>
    </section>
  );
}
