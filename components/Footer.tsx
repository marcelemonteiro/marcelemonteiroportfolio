import Contact from "./Contact"

export default function Footer() {
  return (
    <footer className="w-full mt-12 border-t-8 bg-gradient-to-r from-violet-500 to-orange-300">
      <Contact />

      <p className="text-center text-sm lg:text-base p-4 text-neutral-100">
        © 2023 | Designed and coded with 💜 by Marcele Monteiro
      </p>
    </footer>
  );
}
