@AGENTS.md

# EventCast Landing Page

Next.js 16 (App Router) + React 19 + Tailwind v4 landing page for EventCast — a restaurant operations platform for Lithuanian restaurants. Built on the Vectura Framer template (https://vectura.framer.website/). All copy is Lithuanian.

## Design system (do not deviate)
- Fonts: Geist / Geist Mono via `next/font/google`; mono is used for small uppercase labels.
- Section headings: 58px, `tracking-[-2.9px]`, `font-normal`; sections `py-[120px] px-[40px]`, `max-w-[1600px]`.
- Buttons: pill `rounded-[64px]`; cards `rounded-[16px]`/`rounded-2xl`.
- Animations: no animation library. Scroll reveals via `data-animate` (+ optional `data-delay="1..4"`) handled by `components/ScrollObserver.tsx` (IntersectionObserver). Never add framer-motion.
- Floating mock-UI cards: white, `rounded-2xl`, `shadow-[0_8px_32px_rgba(0,0,0,0.12)]`, absolutely positioned with negative offsets over a main app card.
- No new dependencies: only clsx, tailwind-merge (`cn()` in `lib/utils.ts`), lucide-react. Charts are inline SVG polylines.

## Landing page section map (app/page.tsx, top to bottom)
1. `Navbar` (+ `ProductMegaMenu`)
2. `HeroSection` — video bg, centered text, floating dashboard preview card clipped at the hero's bottom edge (hidden below `lg`)
3. `PilotStat` — one-line stat "12 restoranų piloto programoje" (replaced the old fake logo ticker `Logos.tsx`, deleted)
4. `Features` — "Viskas vienoje platformoje" sticky-nav tabs; 3 tabs render coded product mockups: `ScheduleMockup` (grafikai), `FinanceMockup` (finansai/analitika), `OperationsMockup` (HACCP/pristatymai/sandėlis). Mockups are fixed 760×540 and scaled down responsively via a `scale-[…]` wrapper in Features.tsx.
5. `ManagementTools` — black bento section; each card's title box contains a UI snippet (supplier invoices, task kanban, staff roles)
6. `WorkflowSection` — "Sukurta tikrosioms restorano operacijoms" 2×2 benefit grid (integrations: Wolt, Bolt, Syrve, Rivile, SmartID, Dokobit)
7. `TestimonialsSection`, `CaseStudyGrid`, `BlogSection`, `CTASection`, `Footer`

## Mockup conventions
- `MockSidebar.tsx` — shared 140px EventCast app sidebar for all dashboard mockups; pass `active` label.
- Mockups are server components (no hooks, no "use client"); only `Features.tsx`, `Navbar.tsx`, `TestimonialsSection.tsx`, `ScrollObserver.tsx` are client components.
- Status pills: `bg-{color}-50 text-{color}-700 border-{color}-200`; alert/insight rows use colored left borders (`border-l-2`), no icons.
- Product feature copy source: FEATURES_FOR_LANDING.md (kept in the owner's Downloads, not in repo).

## Other pages
- `/pricing` — PricingHero, PricingCards, PricingComparison, PricingFAQ.
