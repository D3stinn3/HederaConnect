import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import About from '@/components/About'

export const metadata = genPageMetadata({ title: 'Authors' })

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Render "About" section only once */}
      <About />

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
