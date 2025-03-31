import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <ClerkProvider>
      <html
        lang={siteMetadata.language}
        className={`${space_grotesk.variable} scroll-smooth`}
        suppressHydrationWarning
      >
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${basePath}/static/favicons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${basePath}/static/favicons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${basePath}/static/favicons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
        <link
          rel="mask-icon"
          href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
        <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
          <ThemeProviders>
            <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
            <SectionContainer>
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <Header />
                <main className="mb-auto">
                  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                    <svg
                      className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                      viewBox="0 0 1155 678"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="url(#gradient1)"
                        fillOpacity="0.3"
                        d="M317.066 32.0715C142.865 -25.6333 -43.0282 92.7453 -99.8798 265.207C-154.224 428.287 -83.4553 614.658 57.2377 697.527C187.018 773.93 341.491 709.719 469.974 647.157C595.248 586.381 725.065 516.076 773.743 376.855C833.68 206.265 805.767 3.8623 665.074 -68.0131C524.381 -139.888 398.664 -35.5354 317.066 32.0715Z"
                      />
                      <defs>
                        <linearGradient
                          id="gradient1"
                          x1="578.5"
                          y1="-143.5"
                          x2="1155"
                          y2="678"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#4F46E5" />
                          <stop offset="1" stopColor="#9333EA" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {children}

                  <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                    <svg
                      className="relative left-[calc(50%+3rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                      viewBox="0 0 1155 678"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="url(#gradient2)"
                        fillOpacity="0.3"
                        d="M317.066 32.0715C142.865 -25.6333 -43.0282 92.7453 -99.8798 265.207C-154.224 428.287 -83.4553 614.658 57.2377 697.527C187.018 773.93 341.491 709.719 469.974 647.157C595.248 586.381 725.065 516.076 773.743 376.855C833.68 206.265 805.767 3.8623 665.074 -68.0131C524.381 -139.888 398.664 -35.5354 317.066 32.0715Z"
                      />
                      <defs>
                        <linearGradient
                          id="gradient2"
                          x1="578.5"
                          y1="-143.5"
                          x2="1155"
                          y2="678"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#4F46E5" />
                          <stop offset="1" stopColor="#9333EA" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </main>
              </SearchProvider>
              <Footer />
            </SectionContainer>
          </ThemeProviders>
        </body>
      </html>
    </ClerkProvider>
  )
}
