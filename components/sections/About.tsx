export default function About() {
  return (
    <section id="about" className="px-4 lg:px-0 py-20 bg-[#1b2533]">
      <div className="max-w-6xl m-auto">
        <h2 className="text-4xl">Sobre mim</h2>

        <p className="my-6">
          Sempre me interessei por construção de interfaces e programação, ver
          código se transformado em algo na tela sempre encheu meus olhos. Com
          isso, terminado o ensino médio ingressei em um{" "}
          <span className="text-[#e5a68f]">ensino técnico em informática</span>{" "}
          com foco em programação no Senac, lá tive o primeiro contato com as
          tecnologias e linguagens que utilizo hoje.
        </p>

        <p className="my-6">
          Nos últimos meses para terminar o técnico, engressei na graduação em{" "}
          <span className="text-[#e5a68f]">Sistemas de Informação</span> na
          Univerdade Veiga de Almeida, e fiz os dois paralelamente até terminar
          o técnico em outubro de 2020. Tenho previsão de terminar a graduação
          no primeiro semestre de 2025.
        </p>

        <p className="my-6">
          No segundo semestre da faculdade, em dezembro de 2021 iniciei como{" "}
          <span className="text-[#e5a68f]">
            estagiária em Desenvolvimento Web Front-end
          </span>{" "}
          no Ministério Público do Estado do Rio de Janeiro (
          <span className="text-[#e5a68f]">MPRJ</span>) no setor da GADG, onde
          estou atualmente e participo do desenvolvimento do projeto Parquet
          Digital (uma ferramente de auxílio aos promotores).
        </p>

        <p className="my-6">
          Além da programação front-end, também me interesso por experiência do
          usuário, acessibilidade e programação back-end.
        </p>

        <a
          href="#contact"
          className="inline-block p-4 rounded-md font-medium bg-[#e5a68f]"
        >
          Entre em contato!
        </a>
      </div>
    </section>
  );
}
