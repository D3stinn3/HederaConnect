import { Client, AccountId, PrivateKey } from '@hashgraph/sdk';

export async function connectWallet(accountId: string, privateKey: string) {
  try {
    const client = Client.forTestnet(); // Change to `forMainnet()` if using mainnet
    client.setOperator(AccountId.fromString(accountId), PrivateKey.fromString(privateKey));

    return { message: 'Wallet connected successfully', accountId };
  } catch (error) {
    throw new Error('Failed to connect wallet: ' + error.message);
  }
}
