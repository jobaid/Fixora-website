import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ScrollText, Download, Printer } from 'lucide-react'

export default function LegalPage({ title, kicker, content, effectiveDate, lastModified }) {
  return (
    <div className="relative overflow-hidden">
      {/* Backdrop */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[360px] -z-10"
        style={{ background: 'radial-gradient(ellipse at 50% -20%, rgba(249,115,22,0.18), transparent 60%), linear-gradient(180deg,#fff7ed,#ffffff)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-14 pb-20">
        {/* Hero */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-brand-50 text-brand-700 border border-brand-100 shadow-sm">
            <ScrollText size={12} /> {kicker || 'Legal'}
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-slate-600">
            {effectiveDate && <span><strong className="text-slate-900">Effective:</strong> {effectiveDate}</span>}
            {lastModified && <span><strong className="text-slate-900">Last modified:</strong> {lastModified}</span>}
          </div>
          <div className="mt-4 flex justify-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50">
              <Printer size={13} /> Print
            </button>
          </div>
        </div>

        {/* Document */}
        <article className="mt-10 bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-10
          prose prose-slate max-w-none
          prose-headings:scroll-mt-20
          prose-h1:text-3xl prose-h1:font-extrabold prose-h1:text-slate-900
          prose-h2:text-xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-10 prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-2
          prose-h3:text-lg prose-h3:font-semibold prose-h3:text-slate-900 prose-h3:mt-6
          prose-p:text-slate-700 prose-p:leading-relaxed
          prose-strong:text-slate-900 prose-strong:font-semibold
          prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
          prose-li:text-slate-700
          prose-ul:my-3 prose-ol:my-3
          prose-hr:my-8 prose-hr:border-slate-200
          prose-code:bg-slate-100 prose-code:text-slate-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-blockquote:border-l-brand-500 prose-blockquote:bg-brand-50 prose-blockquote:text-slate-700 prose-blockquote:not-italic prose-blockquote:rounded-r-md
          prose-table:text-sm">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </article>

        {/* Footer download / contact */}
        <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600 text-center">
          Questions about this document? Contact <strong className="text-slate-900">Web Services LLC DBA Fixora ERP</strong>
          <br />
          2709 N Hayden Island Dr, STE 520328, Portland, Oregon, 97217, USA · <span className="font-mono">+1-762-233-3344</span>
        </div>
      </div>
    </div>
  )
}
