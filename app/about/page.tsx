import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Authors' })

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Render "About" section only once */}
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          About
        </h1>
      </div>

      {/* Render all authors */}
      <div className="space-y-10">
        {allAuthors.map((author) => {
          const mainContent = coreContent(author)
          return (
            <AuthorLayout key={author.slug} content={mainContent}>
              <MDXLayoutRenderer code={author.body.code} />
            </AuthorLayout>
          )
        })}
      </div>
    </div>
  )
}
