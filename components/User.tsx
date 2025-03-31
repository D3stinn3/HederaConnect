'use client'

import { useUser, SignOutButton } from '@clerk/nextjs'
import { BsPersonFill } from 'react-icons/bs'
import { IoLogOutOutline } from 'react-icons/io5'
import { useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const User = () => {
  const { user, isSignedIn } = useUser()
  const router = useRouter()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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
        <div className="absolute right-0 z-50 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-2 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <a
            href="/user"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            Manage Account
          </a>
          <hr className="border-gray-200 dark:border-gray-600" />
          <SignOutButton>
            <button className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700">
              <IoLogOutOutline className="mr-2 h-5 w-5" />
              Logout
            </button>
          </SignOutButton>
        </div>
      )}
    </div>
  )
}

export default User
