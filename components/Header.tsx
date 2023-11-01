export default function Header({ lang }: { lang: string }) {
  const isCurrentLanguage = (str: string) =>
    str === lang ? "border-b-2 border-white" : "";

  return (
    <header className="bg-gradient-to-r from-violet-500 to-orange-300 border-b-4 text-white text-xl px-4 py-1">
      <div className="flex justify-center">
        <a
          href="/en"
          className={`mr-4 hover:opacity-60 ${isCurrentLanguage("en")}`}
        >
          eng
        </a>
        <a href="/pt" className={`hover:opacity-60 ${isCurrentLanguage("pt")}`}>
          pt-BR
        </a>
      </div>
    </header>
  );
}
