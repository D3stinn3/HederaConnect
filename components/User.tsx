'use client'

import { useUser, SignOutButton } from '@clerk/nextjs'
import { BsPersonFill } from 'react-icons/bs'
import { IoLogOutOutline } from 'react-icons/io5'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { BsWallet2 } from 'react-icons/bs'
import { MdManageAccounts } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const User = () => {
  const { user, isSignedIn } = useUser()
  const router = useRouter()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [walletConnected, setWalletConnected] = useState(false)
  const [showWalletModal, setShowWalletModal] = useState(false)
  const [accountId, setAccountId] = useState('')
  const [privateKey, setPrivateKey] = useState('')
  const [showPrivateKey, setShowPrivateKey] = useState(false)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownOpen])

  // Function to connect wallet
  const connectWallet = async () => {
    if (!accountId || !privateKey) {
      alert('Account ID and Private Key are required!')
      return
    }

    try {
      const response = await fetch('/api/wallets/hedera/wallet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accountId, privateKey }),
      })

      const data = await response.json()

      if (response.ok) {
        alert('Wallet connected successfully!')
        setWalletConnected(true)
        setShowWalletModal(false) // Close modal on success
      } else {
        alert(`Error: ${data.error}`)
      }
    } catch (error) {
      console.error('Wallet connection failed:', error)
      alert('Failed to connect wallet.')
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {isSignedIn && user?.imageUrl ? (
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
          <Image
            src={user.imageUrl}
            alt="User"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border border-gray-300 dark:border-gray-700"
          />
        </button>
      ) : (
        <button onClick={() => router.push('/login')}>
          <BsPersonFill className="hover:text-primary-500 dark:hover:text-primary-400 h-6 w-6 text-gray-900 dark:text-white" />
        </button>
      )}

      {dropdownOpen && isSignedIn && (
        <div className="ring-opacity-5 absolute right-0 z-50 mt-2 w-48 origin-top-right divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black focus:outline-hidden dark:bg-gray-800">
          <Link
            href="/user"
            className="flex w-full items-center px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            <MdManageAccounts className="mr-2 h-5 w-5" />
            Manage Account
          </Link>

          <button
            onClick={() => setShowWalletModal(true)}
            className="flex w-full items-center px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            <BsWallet2 className="mr-2 h-5 w-5" />
            Connect Wallet
          </button>

          <hr className="border-gray-200 dark:border-gray-600" />
          <SignOutButton>
            <button className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700">
              <IoLogOutOutline className="mr-2 h-5 w-5" />
              Logout
            </button>
          </SignOutButton>
        </div>
      )}

      {/* Wallet Connect Modal */}
      {showWalletModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/30 backdrop-blur-sm dark:bg-gray-900/30"
          onClick={() => setShowWalletModal(false)}
        >
          <div
            className="w-96 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Connect Hedera Wallet
            </h2>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Account ID
              </label>
              <input
                type="text"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Private Key
              </label>
              <div className="relative">
                <input
                  type={showPrivateKey ? 'text' : 'password'}
                  value={privateKey}
                  onChange={(e) => setPrivateKey(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:ring focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                />
                <button
                  type="button"
                  className="absolute top-2 right-3 text-gray-500 dark:text-gray-400"
                  onClick={() => setShowPrivateKey(!showPrivateKey)}
                >
                  {showPrivateKey ? (
                    <FiEyeOff className="h-5 w-5" />
                  ) : (
                    <FiEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setShowWalletModal(false)}
                className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={connectWallet}
                className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default User
