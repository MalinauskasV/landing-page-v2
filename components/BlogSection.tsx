import React from "react";

const posts = [
  {
    date: "MAY 13, 2025",
    category: "OPS & STRATEGY",
    title: "Scaling Finance Ops Without Slowing Down",
    author: "Ella Navarro",
    authorRole: "Head of Finance Ops",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=60",
  },
  {
    date: "MAY 9, 2025",
    category: "GUIDES & RESOURCES",
    title: "Modern Budget Workflows That Don't Break Under Pressure",
    author: "Jordan Malik",
    authorRole: "Head of Customer Success",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60",
    featured: true,
  },
  {
    date: "MAY 5, 2025",
    category: "PRODUCT & UPDATES",
    title: "Introducing Roles & Permissions in Vectura",
    author: "Clara Jensen",
    authorRole: "Product Marketing Manager",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=800&auto=format&fit=crop",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60",
  },
];

export const BlogSection = () => {
  return (
    <section className="relative w-full bg-white py-[120px] px-10 flex flex-col items-center gap-16 overflow-hidden">
      <div className="w-full max-w-[1600px] flex flex-col gap-16">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-black text-[48px] leading-[1.15] font-normal tracking-[-2px] max-w-[480px]">
              Ideas, insights, and updates from our team
            </h2>
            <p className="text-black/60 text-[17px] leading-[1.6] max-w-[480px]">
              From product announcements to practical guides — stay in the loop with how Vectura is building smarter finance workflows and sharing what we&apos;ve learned along the way.
            </p>
          </div>
          <button className="bg-black text-white text-[15px] px-6 py-3 rounded-full hover:bg-black/80 transition-colors whitespace-nowrap">
            View all posts
          </button>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div key={i} className="group flex flex-col gap-5 cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden h-[260px]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {post.featured && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white text-black text-[14px] font-medium px-5 py-2.5 rounded-full shadow-lg">
                      Read more
                    </button>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 text-[12px] text-black/40 font-mono tracking-wider">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.category}</span>
              </div>
              <h3 className="text-black text-[22px] leading-[1.3] font-normal tracking-[-0.5px]">
                {post.title}
              </h3>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-black/5">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <p className="text-[13px] font-medium text-black">{post.author}</p>
                  <p className="text-[12px] text-black/40">{post.authorRole}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
