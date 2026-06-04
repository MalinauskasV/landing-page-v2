"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface FAQItem { question: string; answer: string; }

const faqData: FAQItem[] = [
  {
    question: "Ar galiu naudoti EventCast keliuose restoranuose?",
    answer: "Taip — Pro planas leidžia valdyti kelias lokacijas iš vieno pulto. Galite matyti visų restoranų grafikus, darbuotojus ir dokumentus vienoje vietoje, neperjunginėjant paskyrų."
  },
  {
    question: "Kiek laiko užtrunka pradėti naudotis?",
    answer: "Dauguma komandų pilnai veikia per 1–2 darbo dienas. Mūsų komanda padės jums sukonfigūruoti grafikus, pridėti darbuotojus ir nustatyti roles. Taip pat suteikiame mokymus jei reikia papildomos pagalbos."
  },
  {
    question: "Ar darbuotojai turi mokėti už programėlę?",
    answer: "Ne — EventCast naudojimas darbuotojams yra nemokamas. Mokate tik jūs kaip restorano vadovas ar savininkas. Darbuotojai gauna prieigą prie grafikų, žinučių ir dokumentų be jokių papildomų mokesčių."
  },
  {
    question: "Ar galiu bet kada keisti arba atšaukti planą?",
    answer: "Taip, galite keisti planą ar atšaukti prenumeratą bet kada. Nėra ilgalaikių sutarčių ar paslėptų mokesčių. Jei pasirinkote metinį planą, likusios lėšos grąžinamos proporcingai."
  },
  {
    question: "Kaip veikia grafikų kūrimas?",
    answer: "EventCast leidžia kurti grafikus vilkimo ir paleidimo principu, kopijuoti ankstesnes savaites ir automatiškai siųsti pamainos priminimus darbuotojams. Darbuotojai gali prašyti pamainų keitimų tiesiai per programėlę — o jūs tiesiog patvirtinate."
  }
];

export const PricingFAQ = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
      <section ref={ref} id="faq" className={cn("flex flex-col items-center bg-[#fafafa] py-[120px] px-[40px] overflow-hidden gap-[64px]", className)} {...props}>
        <div className="w-full max-w-[1600px] flex flex-col items-start gap-[24px]">
          <h2 data-animate className="text-[58px] font-normal leading-[69.6px] tracking-[-2.9px] text-black max-w-[540px]">Dažnai užduodami klausimai</h2>
          <p data-animate data-delay="1" className="text-[21px] font-normal leading-[29.4px] text-[#222222] max-w-[440px]">Atsakymai į populiariausius klausimus apie EventCast.</p>
        </div>
        <div className="w-full max-w-[1600px] flex flex-row items-start gap-[64px]">
          <div data-animate className="flex-1 min-w-0 h-[522.5px] bg-[#415371] rounded-[16px] p-[40px] flex flex-col justify-between items-start overflow-hidden">
            <div className="flex flex-col items-start gap-[24px] w-full">
              <div className="w-[64px] h-[64px] rounded-[32px] overflow-hidden bg-white/20" />
              <div className="flex flex-col gap-[24px]">
                <h3 className="text-[40px] font-normal leading-[48px] tracking-[-0.8px] text-white">Užsisakykite demo</h3>
                <p className="text-[19px] font-normal leading-[26.6px] tracking-[-0.19px] text-white/80 max-w-[478px]">Pakalbėkime apie jūsų restoraną ir parodysime, kaip EventCast gali supaprastinti kasdienį darbą.</p>
              </div>
              <a href="/contact/sales" className="group inline-flex items-center justify-center px-[34px] py-[16px] bg-white rounded-[64px] transition-all duration-200 hover:opacity-[0.846]">
                <span className="text-[19px] font-normal leading-[26.6px] tracking-[-0.19px] text-black">Gauti demo</span>
              </a>
            </div>
            <div className="flex flex-col">
              <p className="text-[19px] font-normal leading-[26.6px] tracking-[-0.19px] text-white/80">Norite rašyti? Esame pasiekiami:</p>
              <a href="mailto:labas@eventcast.lt" className="text-[19px] font-normal leading-[26.6px] tracking-[-0.19px] text-white hover:text-white/80 transition-colors">
                <strong>labas@eventcast.lt</strong>
              </a>
            </div>
          </div>
          <div className="flex-[1.75] min-w-0 flex flex-col">
            {faqData.map((item, index) => (
              <div key={index} data-animate className="border-b border-black/10 last:border-b-0">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex flex-row justify-between items-center py-[36px] text-left cursor-pointer">
                  <span className="text-[21px] font-normal leading-[31.5px] text-[#222222]">{item.question}</span>
                  <ChevronDown className={cn("w-5 h-5 text-black transition-transform duration-300", openIndex === index ? "rotate-180" : "rotate-0")} />
                </button>
                <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", openIndex === index ? "max-h-[500px] opacity-100 pb-[36px]" : "max-h-0 opacity-0")}>
                  <p className="text-[19px] font-light leading-[26.6px] text-[#222222] max-w-[977px]">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

PricingFAQ.displayName = "PricingFAQ";
export default PricingFAQ;
