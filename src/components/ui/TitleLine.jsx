// The site title ("Full-Stack … Mühendisi · .NET & React/Next.js") as one display line: when it wraps, it wraps after
// the "·" (the dot stays with the words before it), and the stack part after it stays together, so a narrow screen
// never shows ".NET &" / "React/Next.js". Display only; meta tags and JSON-LD keep the plain string.
export default function TitleLine({ text }) {
  if (typeof text !== "string") return text ?? null;
  const index = text.indexOf(" · ");
  if (index < 0) return text;
  return (
    <>
      {`${text.slice(0, index)}\u00a0· `}
      <span className="whitespace-nowrap">{text.slice(index + 3)}</span>
    </>
  );
}
