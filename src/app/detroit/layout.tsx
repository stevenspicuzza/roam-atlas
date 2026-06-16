import { detroit } from "@/data/detroit";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

export default function DetroitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        cityName={detroit.name}
        state={detroit.state}
        country={detroit.country}
        lastUpdated={detroit.lastUpdated}
        nextUpdate={detroit.nextUpdate}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="flex-1 px-4 py-6 pt-16 sm:px-6 lg:px-8 lg:pt-6">{children}</main>
      </div>
    </div>
  );
}
