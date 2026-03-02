'use client'

import Link from 'next/link'
import { openMajaWidget } from '@/lib/maja-widget'
import type { BlogPost } from '@/content/blog-posts'
import { trackSeoEvent } from '@/lib/analytics'

export default function BlogCTA({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
      <Link
        href={post.moneyPagePath}
        onClick={() =>
          trackSeoEvent('internal_cta_click', {
            source_page: 'blog-article',
            source_section: 'article-cta-link',
            cta_type: 'link',
            keyword_cluster: post.primaryKeyword,
          })
        }
        className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-[#FF5D00]/50 hover:text-[#FF5D00] transition-colors text-center"
      >
        Explore service packages
      </Link>

      <button
        onClick={() =>
          openMajaWidget({
            sourcePage: 'blog-article',
            sourceSection: 'article-cta',
            ctaType: 'button',
            keywordCluster: post.primaryKeyword,
          })
        }
        className="px-12 py-5 bg-[#FF5D00] hover:bg-[#FF7A33] text-black font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,93,0,0.3)] active:scale-95"
      >
        Start chat with Maja
      </button>
    </div>
  )
}
