'use client'
import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl py-4 text-gray-900 sm:py-6 lg:py-8 dark:text-gray-100">
      <div className="mx-auto max-w-2xl py-8 text-center sm:py-32 lg:py-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-100">
          Earn Rewards for Sharing Your Insights
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Contribute valuable blogs from various platforms and get rewarded in Hedera when your
          content is unique and recognized.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/rewards"
            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            Get started
          </Link>
          <Link
            href="/about"
            className="text-sm leading-6 font-semibold text-gray-900 dark:text-gray-200"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
