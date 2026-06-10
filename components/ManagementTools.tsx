import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  snippet: React.ReactNode;
  reverse?: boolean;
  bgColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  icon,
  snippet,
  reverse = false,
  bgColor = "bg-[#F9FAFB]",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row w-full gap-[20px] overflow-hidden transition-opacity duration-500 group-hover:opacity-40 hover:!opacity-100",
        reverse && "md:flex-row-reverse",
      )}
    >
      {/* Image side */}
      <div data-animate className="relative flex-[1.68] h-[632px] rounded-[16px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 50%" }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-tr from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.25)] to-transparent" />
        <div className="absolute inset-0 z-[2] p-[40px] flex flex-col justify-end items-start gap-[16px]">
          <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[8px] bg-white/15 backdrop-blur-[8px]">
            {icon}
          </div>
          <p className="max-w-[75%] text-white text-[21px] leading-[29.4px] font-normal break-words">
            {description}
          </p>
        </div>
      </div>

      {/* Title side */}
      <div data-animate data-delay="1" className={cn(
        "flex-1 h-[632px] rounded-[16px] p-[40px] flex flex-col justify-between items-start",
        bgColor
      )}>
        <h3 className="text-[40px] leading-[48px] font-normal tracking-[-0.8px] text-black max-w-[300px]">
          {title}
        </h3>
        {snippet}
      </div>
    </div>
  );
};

const ApprovalKanbanSnippet = () => (
  <div className="w-full grid grid-cols-2 gap-3">
    {[
      {
        column: "Vykdomos",
        tasks: [
          { title: "Atnaujinti alergenų matricą", priority: "Skubu", color: "bg-red-50 text-red-700 border-red-200" },
          { title: "Patikrinti šaldiklio jutiklį", priority: "Aukštas", color: "bg-orange-50 text-orange-700 border-orange-200" },
        ],
      },
      {
        column: "Atlikta",
        tasks: [
          { title: "Savaitės valymo auditas", priority: "Normalus", color: "bg-zinc-50 text-zinc-600 border-zinc-200" },
        ],
      },
    ].map((col) => (
      <div key={col.column} className="bg-[#F9FAFB] rounded-xl p-2.5 flex flex-col gap-2 self-start">
        <p className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase px-1">{col.column}</p>
        {col.tasks.map((task) => (
          <div key={task.title} className="bg-white border border-zinc-100 rounded-lg p-2.5 flex flex-col gap-1.5 shadow-sm">
            <p className="text-[12px] font-medium text-zinc-900 leading-snug">{task.title}</p>
            <span className={cn("text-[10px] font-medium px-2 py-0.5 rounded-full border w-fit", task.color)}>{task.priority}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

const SupplierInvoicesSnippet = () => (
  <div className="w-full flex flex-col gap-2">
    {[
      { name: "Mondeles International", amount: "1 240,50 €", status: "Apmokėta", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
      { name: "Viūnas", amount: "386,20 €", status: "Laukiama", color: "bg-blue-50 text-blue-700 border-blue-200" },
      { name: "Maxima Versud", amount: "712,84 €", status: "Neatitikimas", color: "bg-orange-50 text-orange-700 border-orange-200" },
    ].map((invoice) => (
      <div key={invoice.name} className="flex items-center justify-between gap-3 bg-white border border-zinc-100 rounded-xl px-4 py-3 shadow-sm">
        <div className="min-w-0">
          <p className="text-[13px] font-medium text-zinc-900 truncate">{invoice.name}</p>
          <p className="text-[11px] text-zinc-400">{invoice.amount}</p>
        </div>
        <span className={cn("shrink-0 text-[10px] font-medium px-2.5 py-1 rounded-full border", invoice.color)}>{invoice.status}</span>
      </div>
    ))}
  </div>
);

const StaffRolesSnippet = () => (
  <div className="w-full flex flex-col gap-2">
    {[
      { name: "Paulius Stankus", role: "Vadovas", badge: "bg-blue-50 text-blue-700 border-blue-200", avatar: "bg-blue-400" },
      { name: "Tomas Paulauskas", role: "Padavėjas", badge: "bg-violet-50 text-violet-700 border-violet-200", avatar: "bg-violet-400" },
      { name: "Mantas Grigas", role: "Barmenas", badge: "bg-indigo-50 text-indigo-700 border-indigo-200", avatar: "bg-indigo-400" },
      { name: "Rūta Kazlauskienė", role: "Virtuvės vedėjas", badge: "bg-emerald-50 text-emerald-700 border-emerald-200", avatar: "bg-emerald-400" },
    ].map((person) => (
      <div key={person.name} className="flex items-center justify-between gap-3 bg-white border border-zinc-100 rounded-xl px-3 py-2.5 shadow-sm">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className={cn("w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold text-white", person.avatar)}>
            {person.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <p className="text-[13px] font-medium text-zinc-900 truncate">{person.name}</p>
        </div>
        <span className={cn("shrink-0 text-[10px] font-medium px-2.5 py-1 rounded-full border", person.badge)}>{person.role}</span>
      </div>
    ))}
  </div>
);

export const ManagementTools: React.FC = () => {
  return (
    <section
      id="management-features"
      className="w-full bg-black py-[180px] px-[40px] flex flex-col items-center gap-[80px]"
    >
      <div className="w-full max-w-[1600px]">
        <h2 data-animate className="text-white text-[58px] leading-[69.6px] font-normal tracking-[-2.9px] max-w-[800px]">
          Valdymo įrankiai, kurie laiko komandą suderintą
        </h2>
      </div>

      <div className="group w-full max-w-[1600px] flex flex-col gap-[20px]">
        <FeatureCard
          title="Išmanios patvirtinimo grandinės"
          description="Jokių spūsčių. Nustatykite patvirtinimo taisykles pagal skyrių ar sumą ir išlaikykite viską judant — be bereikalingų žinučių ir el. laiškų."
          image="/images/4pzb4nKL5cZJWoiaSTCkO7OUdA.jpg"
          bgColor="bg-white"
          snippet={<ApprovalKanbanSnippet />}
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.35 3.836C11.285 4.046 11.25 4.269 11.25 4.5C11.25 4.914 11.586 5.25 12 5.25H16.5C16.914 5.25 17.25 4.914 17.25 4.5C17.25 4.269 17.215 4.046 17.151 3.836M11.35 3.836C11.633 2.918 12.488 2.25 13.5 2.25H15C16.012 2.25 16.867 2.918 17.151 3.836M11.35 3.836C10.974 3.859 10.599 3.885 10.226 3.916C9.095 4.01 8.25 4.973 8.25 6.108V8.25M17.151 3.836C17.526 3.859 17.901 3.885 18.274 3.916C19.405 4.01 20.25 4.973 20.25 6.108V16.5C20.25 17.743 19.243 18.75 18 18.75H15.75M8.25 8.25H4.875C4.254 8.25 3.75 8.754 3.75 9.375V20.625C3.75 21.246 4.254 21.75 4.875 21.75H14.625C15.246 21.75 15.75 21.246 15.75 20.625V18.75M8.25 8.25H14.625C15.246 8.25 15.75 8.754 15.75 9.375V18.75M7.5 15.75L9 17.25L12 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />

        <FeatureCard
          title="Tiekėjų valdymas"
          description="Sekite tiekėjų naudojimą, palyginkite kainas ir aptikite besidubliuojančias sąskaitas. EventCast leidžia aiškiai matyti, kur eina biudžetas — ir kur turėtų eiti."
          image="/images/u9KTEMtiKHOm7bBeXG0YihbPEc.jpg"
          reverse
          bgColor="bg-[#F2ECE8]"
          snippet={<SupplierInvoicesSnippet />}
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.25 6.375C20.25 8.653 16.556 10.5 12 10.5C7.444 10.5 3.75 8.653 3.75 6.375M20.25 6.375C20.25 4.097 16.556 2.25 12 2.25C7.444 2.25 3.75 4.097 3.75 6.375M20.25 6.375V17.625C20.25 19.903 16.556 21.75 12 21.75C7.444 21.75 3.75 19.903 3.75 17.625V6.375M20.25 6.375V10.125M3.75 6.375V10.125M20.25 10.125V13.875C20.25 16.153 16.556 18 12 18C7.444 18 3.75 16.153 3.75 13.875V10.125M20.25 10.125C20.25 12.403 16.556 14.25 12 14.25C7.444 14.25 3.75 12.403 3.75 10.125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />

        <FeatureCard
          title="Rolės ir prieigos lygiai"
          description="Vadybininkas, virėjas, savininkas — kiekvienas mato tik tai, ko jam reikia. EventCast užtikrina saugų ir aiškų bendradarbiavimą su tinkinamomis rolėmis."
          image="/images/dAe0wOtBZX6mSbRdD0ELGg45wM.jpg"
          bgColor="bg-[#F9FAFB]"
          snippet={<StaffRolesSnippet />}
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19.128C15.833 19.37 16.714 19.5 17.625 19.5C19.104 19.5 20.503 19.158 21.746 18.548C21.749 18.491 21.75 18.433 21.75 18.375C21.75 16.097 19.903 14.25 17.625 14.25C16.207 14.25 14.956 14.966 14.214 16.055M15 19.128V19.125C15 18.012 14.715 16.966 14.214 16.055M15 19.128C15 19.163 15 19.199 14.999 19.234C13.137 20.355 10.957 21 8.625 21C6.294 21 4.113 20.355 2.251 19.234C2.25 19.198 2.25 19.162 2.25 19.125C2.25 15.604 5.104 12.75 8.625 12.75C11.033 12.75 13.129 14.085 14.214 16.055M12 6.375C12 8.239 10.489 9.75 8.625 9.75C6.761 9.75 5.25 8.239 5.25 6.375C5.25 4.511 6.761 3 8.625 3C10.489 3 12 4.511 12 6.375ZM20.25 8.625C20.25 10.075 19.075 11.25 17.625 11.25C16.175 11.25 15 10.075 15 8.625C15 7.175 16.175 6 17.625 6C19.075 6 20.25 7.175 20.25 8.625Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        />
      </div>
    </section>
  );
};

export default ManagementTools;
