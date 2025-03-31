'use client'
import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl py-4 text-gray-900 sm:py-6 lg:py-8 dark:text-gray-100">
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

      <div className="mx-auto max-w-2xl py-20 text-center sm:py-32 lg:py-40">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-100">
          Earn Rewards for Sharing Your Insights
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Contribute valuable blogs from various platforms and get rewarded in Hedera when your
          content is unique and recognized.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/blog"
            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Get started
          </Link>
          <Link
            href="/learn-more"
            className="text-sm leading-6 font-semibold text-gray-900 dark:text-gray-200"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

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
    </div>
  )
}
