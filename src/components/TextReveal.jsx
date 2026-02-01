export default function TextReveal({ text }) {
  const words = text.split(" ");
  const grad = "linear-gradient(90deg, #fff 0%, var(--accent-yellow) 38%, #c6c6c6 100%)";

  return (
    <span style={{ display: "inline-block" }} aria-hidden={false}>
      {words.map((w, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            marginRight: "10px",
            whiteSpace: "pre",
            background: grad,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "var(--text-main)",
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}  
