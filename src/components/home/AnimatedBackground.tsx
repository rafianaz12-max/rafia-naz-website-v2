export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary-500/20 blur-[100px] animate-float" />
      <div
        className="absolute -right-24 top-64 h-80 w-80 rounded-full bg-accent-400/20 blur-[110px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary-600/15 blur-[100px] animate-float"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}
