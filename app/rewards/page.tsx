'use client'

import { useUser, RedirectToSignIn } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { connectWallet, getContract } from '@/utils/hederaContract'

const RewardsPage = () => {
  const { user, isSignedIn } = useUser()
  const [articleLink, setArticleLink] = useState('')
  const [userTokens, setUserTokens] = useState(0) // Track user's earned Hedera tokens
  const [userWins, setUserWins] = useState(0) // Track user's wins
  const [walletConnected, setWalletConnected] = useState(false)

  // Show Clerk's built-in sign-in page if not signed in
  if (!isSignedIn) {
    return <RedirectToSignIn />
  }

  // Connect wallet and fetch user data (tokens, wins)
  const handleConnectWallet = async () => {
    const account = await connectWallet()
    if (account) {
      setWalletConnected(true)
      const contract = await getContract()

      try {
        // Fetch user's HBAR tokens and wins (using contract methods)
        const tokens = await contract.getUserTokens(account)
        const wins = await contract.getUserWins(account)

        setUserTokens(tokens.toString()) // Assuming the contract returns BigNumber
        setUserWins(wins.toString()) // Assuming the contract returns BigNumber
      } catch (error) {
        console.error('Error fetching contract data', error)
      }
    }
  }

  // This useEffect runs only once to check wallet connection on initial load
  useEffect(() => {
    if (!walletConnected) {
      handleConnectWallet()
    }
  }, [walletConnected]) // Add walletConnected as a dependency

  // Handle post submission
  const handlePost = () => {
    if (!articleLink.trim()) {
      alert('Please enter a valid article link.')
      return
    }
    alert(`Article posted: ${articleLink}`)
    setArticleLink('')
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mx-auto mb-6 w-full rounded-lg border bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Share an Article or Blog Post
        </h2>
        <div className="mt-4 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
          <input
            type="url"
            placeholder="Paste article link here..."
            value={articleLink}
            onChange={(e) => setArticleLink(e.target.value)}
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
          <button
            onClick={handlePost}
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Post
          </button>
        </div>
      </div>

      {/* User Information & Rewards */}
      {user && (
        <div className="mb-6 flex flex-col items-center rounded-lg border bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-900">
          <Image
            src={user.imageUrl}
            alt="User"
            width={64}
            height={64}
            className="h-16 w-16 rounded-full border border-gray-300 dark:border-gray-700"
          />
          <h3 className="mt-3 text-lg font-semibold text-gray-800 dark:text-white">
            {user.fullName || 'Anonymous User'}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {user.primaryEmailAddress?.emailAddress || 'No email available'}
          </p>

          {/* User stats */}
          <div className="mt-4 flex w-full justify-around">
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-green-500">{userTokens} HBAR</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Earned</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-blue-500">{userWins}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">Wins</span>
            </div>
          </div>
        </div>
      )}

      {/* Rewards Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Earn HBAR Tokens Card */}
        <div className="rounded-lg border bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-900">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            Earn Hedera Tokens (HBAR)
          </h4>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Post high-quality articles and earn Hedera tokens based on engagement.
          </p>
          <span className="mt-3 inline-block rounded-md bg-green-500 px-3 py-1 text-sm text-white">
            50 HBAR per verified post
          </span>
        </div>

        {/* Engagement Reward Card */}
        <div className="rounded-lg border bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-900">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Engagement Bonus</h4>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Earn extra rewards when your shared posts receive 10+ likes.
          </p>
          <span className="mt-3 inline-block rounded-md bg-blue-500 px-3 py-1 text-sm text-white">
            +25 HBAR for 10+ likes
          </span>
        </div>
      </div>
    </div>
  )
}

export default RewardsPage
