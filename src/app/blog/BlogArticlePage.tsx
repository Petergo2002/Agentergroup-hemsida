import Link from 'next/link'
import BlogCTA from '../components/BlogCTA'
import type { BlogPost } from '@/content/blog-posts'
import { blogPostsBySlug } from '@/content/blog-posts'

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function BlogArticlePage({ post }: { post: BlogPost }) {
  const related = post.relatedSlugs
    .map((slug) => blogPostsBySlug[slug])
    .filter((item): item is BlogPost => Boolean(item))

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-10" />

        <div className="container relative px-4 mx-auto z-20 pt-16 max-w-5xl">
          <Link href="/blog" className="text-white/50 hover:text-[#FF5D00] text-sm uppercase tracking-widest font-mono transition-colors">
            Back to blog
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20 uppercase tracking-wider">
            {post.category}
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-tight">{post.title}</h1>
          <p className="mt-5 text-white/70 text-lg max-w-3xl">{post.excerpt}</p>
          <p className="mt-4 text-sm text-white/50">
            Published {formatDate(post.published)} · Updated {formatDate(post.updated)} · {post.readTimeMinutes} min read
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <article className="container px-4 mx-auto max-w-4xl space-y-12">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-white/75 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2 pl-5 list-disc text-white/75">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="rounded-3xl border border-white/10 bg-[#0F0F0F] p-8 md:p-10 space-y-4">
            <h3 className="text-2xl font-bold">{post.ctaTitle}</h3>
            <p className="text-white/70 leading-relaxed">{post.ctaText}</p>
            <div className="pt-2">
              <BlogCTA />
            </div>
          </section>

          {related.length > 0 && (
            <section className="pt-4">
              <h3 className="text-2xl font-bold mb-6">Related reading</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-[#FF5D00]/40 transition-colors"
                  >
                    <p className="text-xs uppercase tracking-wider text-[#FF5D00] mb-2">{item.category}</p>
                    <p className="font-semibold text-white group-hover:text-[#FF5D00] transition-colors leading-snug">{item.title}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="pt-10 text-center">
            <Link href="/blog" className="text-white/50 hover:text-[#FF5D00] text-sm uppercase tracking-widest font-mono transition-colors">
              Back to all articles
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}
