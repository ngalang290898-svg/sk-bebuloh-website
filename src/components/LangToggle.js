// src/components/LangToggle.js
import { useLanguage } from "../context/LanguageContext";

export default function LangToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded-l ${lang === "en" ? "bg-pink-300" : "bg-gray-200"}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("ms")}
        className={`px-3 py-1 rounded-r ${lang === "ms" ? "bg-pink-300" : "bg-gray-200"}`}
      >
        BM
      </button>
    </div>
  );
}
