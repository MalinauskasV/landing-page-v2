import React from "react";

interface Author {
  name: string;
  role: string;
  photo: string;
}

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  author: Author;
  href: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Kaip restoranai valdo grafikus be Excel ir WhatsApp",
    date: "Geg. 13, 2025",
    category: "Operacijos",
    image: "/images/xQHTLAJm5NoiLEu2lyjmJCm1Lk.jpg",
    author: {
      name: "Eglė Navickaitė",
      role: "Operacijų vadovė",
      photo: "/images/LZYY71GfAAmwFGFURcEc4dfpoY.jpg",
    },
    href: "#",
  },
  {
    id: "2",
    title: "Smart-ID ir e-parašai restoranų sutartyse — kaip tai veikia",
    date: "Geg. 9, 2025",
    category: "Gidai ir resursai",
    image: "/images/vzV4ud1UQ7xLnwDx99ukoOvBW4.jpg",
    author: {
      name: "Justinas Malinauskis",
      role: "Klientų sėkmės vadovas",
      photo: "/images/JKorM5B0WmJOc8WoLSGW2e0hNG8.jpg",
    },
    href: "#",
  },
  {
    id: "3",
    title: "Pristatome AI asistentą — grafikų rekomendacijos realiuoju laiku",
    date: "Geg. 5, 2025",
    category: "Produktas ir naujienos",
    image: "/images/2kq6l9zkPi4aa57pKEkSYHd2qU.jpg",
    author: {
      name: "Kristina Jakštienė",
      role: "Produkto marketingo vadovė",
      photo: "/images/cmQt0ay0xGNLe9Sc30vSaXtio.jpg",
    },
    href: "#",
  },
];

const BlogCard: React.FC<{ post: BlogPost; delay?: string }> = ({ post, delay }) => {
  return (
    <a
      data-animate
      {...(delay ? { "data-delay": delay } : {})}
      href={post.href}
      className="group flex flex-col h-[650px] bg-[#FBFAF9] rounded-2xl overflow-hidden transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-[320px] w-full overflow-hidden rounded-2xl">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.017]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-6 right-6 px-8 py-[13px] bg-white/45 rounded-full opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-white/30">
          <span className="text-[17px] leading-[23.8px] text-black font-normal">Read more</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 pb-8 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[12px] leading-[14.4px] tracking-[0.72px] text-[#222222] font-mono uppercase">
              {post.date}
            </span>
            <span className="text-[12px] text-[#222222]">&bull;</span>
            <div className="px-[13px] py-2 bg-[#F2ECE8] rounded-lg">
              <span className="text-[12px] leading-[14.4px] tracking-[0.72px] text-[#222222] font-mono uppercase">
                {post.category}
              </span>
            </div>
          </div>
          <h3 className="text-[28px] leading-[33.6px] font-normal tracking-[-0.56px] text-black">
            {post.title}
          </h3>
        </div>

        {/* Author */}
        <div className="flex items-center gap-[10px]">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
            <img
              src={post.author.photo}
              alt={post.author.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] leading-[22.4px] font-bold tracking-[-0.16px] text-[#222222]">
              {post.author.name}
            </span>
            <span className="text-[16px] leading-[22.4px] font-normal tracking-[-0.16px] text-[#222222] opacity-70">
              {post.author.role}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export const BlogSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-[120px] px-10 overflow-hidden flex flex-col items-center gap-16">
      {/* Heading */}
      <div className="w-full max-w-[1600px] flex flex-row justify-between items-end">
        <div className="flex flex-col items-start gap-6 max-w-[610px]">
          <h2 data-animate className="text-[58px] leading-[69.6px] font-normal tracking-[-2.9px] text-black">
            Idėjos, įžvalgos ir naujienos iš mūsų komandos
          </h2>
          <p data-animate data-delay="1" className="text-[21px] leading-[29.4px] text-[#222222] font-normal">
            Nuo produkto atnaujinimų iki praktinių vadovų &mdash; sekite, kaip EventCast kuria modernias restoranų valdymo sistemas ir dalijasi tuo, ko išmokome.
          </p>
        </div>

        <div className="pb-2">
          <a
            data-animate
            data-delay="2"
            href="/blog"
            className="group inline-flex items-center justify-center px-[34px] py-4 bg-black rounded-[64px] transition-all duration-300 hover:opacity-[0.788]"
          >
            <span className="text-[19px] leading-[26.6px] text-white font-normal tracking-[-0.19px]">
              View all posts
            </span>
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="w-full max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <BlogCard key={post.id} post={post} delay={i > 0 ? String(i) : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
