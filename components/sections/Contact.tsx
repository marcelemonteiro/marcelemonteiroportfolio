export default function Contact() {
  return (
    <section id="contact" className="px-4 lg:px-0 py-20">
      <div className="max-w-6xl m-auto">
        <h2 className="text-4xl">Contato</h2>

        <p className="my-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque est
          libero eius natus ducimus, modi dolor laborum? Fuga, nemo id. Sed quos
          ducimus nesciunt magni dolores rem earum recusandae dolorum!
        </p>

        <div className="flex gap-4">
          {/* <EmailIcon fill="rgb(229, 229, 229)" /> */}
          <a href="mailto:marcelepmonteiro@gmail.com" className="font-bold">
            marcelepmonteiro@gmail.com
          </a>
        </div>

        <div className="flex gap-4 mt-10">
          {/* <LinkedInLogo fill="rgb(229, 229, 229)" width="40" />
                <GitHubLogo fill="rgb(229, 229, 229)" width="45" /> */}
        </div>
      </div>
    </section>
  );
}
