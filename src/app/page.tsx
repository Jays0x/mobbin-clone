import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <ThemeSwitch />

      <h1 className="text-[var(--foreground)]">This landing page is under development</h1>
      
    </div>
  );
}
