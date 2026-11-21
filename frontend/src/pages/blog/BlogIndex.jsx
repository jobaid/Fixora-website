import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { PAGES, breadcrumbJsonLd } from '../../lib/seo-config'

const posts = [
  {
    page: PAGES.blogBest,
    excerpt: 'What small-shop owners actually need from shop management software — and how to evaluate vendors without falling for feature-count theatre.',
    published: '2026-10-15',
  },
  {
    page: PAGES.blogChoose,
    excerpt: 'A checklist of the non-obvious questions worth asking before you sign up — from data ownership to onboarding time to hidden costs.',
    published: '2026-11-01',
  },
  {
    page: PAGES.blogCloud,
    excerpt: 'Why most shops are moving off desktop-only tools and what the real trade-offs are between cloud and on-premise.',
    published: '2026-11-10',
  },
]

export default function BlogIndex() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <SEO
        title={PAGES.blogIndex.title}
        description={PAGES.blogIndex.description}
        keywords={PAGES.blogIndex.keywords}
        path={PAGES.blogIndex.path}
        jsonLd={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />
      <h1 className="text-4xl font-extrabold text-slate-900">Blog</h1>
      <p className="mt-3 text-slate-600 max-w-2xl">
        Practical, honest guides for auto repair shop owners who are picking shop management software or trying to improve how their current system runs.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article key={post.page.path} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition">
            <time dateTime={post.published} className="text-xs font-semibold text-brand-600">
              {new Date(post.published).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </time>
            <h2 className="mt-2 text-xl font-bold text-slate-900">
              <Link to={post.page.path} className="hover:text-brand-700">{post.page.title.split(' — ')[0].split(':')[0]}</Link>
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">{post.excerpt}</p>
            <Link to={post.page.path} className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700">
              Read article &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
