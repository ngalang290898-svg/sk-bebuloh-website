export default function LangToggle({ lang, setLang }) {
  return (
    <div className="flex justify-end p-4">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded-l ${
          lang === "en" ? "bg-pink-300" : "bg-gray-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("ms")}
        className={`px-3 py-1 rounded-r ${
          lang === "ms" ? "bg-pink-300" : "bg-gray-200"
        }`}
      >
        BM
      </button>
    </div>
  );
}
