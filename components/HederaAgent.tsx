'use client'

import { useState } from 'react'
import { AiOutlineMessage } from 'react-icons/ai' // AI messaging icon

const HederaAgent = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => setModalOpen(!isModalOpen)

  const handleOutsideClick = (e: React.MouseEvent) => {
    // Close modal if clicked outside the modal card
    if (e.target === e.currentTarget) {
      setModalOpen(false)
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={toggleModal}
        className="fixed right-10 bottom-10 rounded-full bg-blue-500 p-4 text-white shadow-lg hover:bg-blue-400"
        aria-label="Chat with AI"
      >
        <AiOutlineMessage size={30} />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={handleOutsideClick} // Close on outside click
        >
          <div className="w-96 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white">AI Chat</h2>
            <div className="mb-4 border-b border-gray-300 dark:border-gray-600">
              <p className="text-center text-gray-500 dark:text-gray-400">In Development</p>
            </div>
            <div className="flex h-48 items-center justify-center rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
              <p className="text-gray-600 dark:text-gray-300">
                Chat functionality is being developed.
              </p>
            </div>
            <button
              onClick={toggleModal}
              className="mt-4 w-full rounded-lg bg-red-500 p-2 text-white hover:bg-red-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default HederaAgent
