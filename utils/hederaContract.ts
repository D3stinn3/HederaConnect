import { BrowserProvider, Contract } from 'ethers'
import HederaConnectRewardsABI from '@/data/HederaConnectRewards.json' // Adjust the path if needed

const CONTRACT_ADDRESS = '0x5602121e1Db86577545D8cCa42e4C8EEEbA2833f'

// Ensure TypeScript recognizes window.ethereum
declare global {
  interface Window {
    ethereum?: any
  }
}

export async function connectWallet() {
  if (typeof window.ethereum === 'undefined') {
    console.error('MetaMask is not installed')
    alert('MetaMask is not installed. Please install it to continue.')
    return null
  }

  try {
    const provider = new BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    return accounts[0] // Returns the connected account
  } catch (error) {
    console.error('User denied account access:', error)
    return null
  }
}

export async function getContract() {
  if (!window.ethereum) throw new Error('No crypto wallet found')

  const provider = new BrowserProvider(window.ethereum)
  const signer = await provider.getSigner()
  return new Contract(CONTRACT_ADDRESS, HederaConnectRewardsABI, signer)
}
