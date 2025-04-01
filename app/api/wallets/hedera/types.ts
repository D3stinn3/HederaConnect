export interface WalletRequest {
    accountId: string;
    privateKey: string;
  }
  
  export interface WalletResponse {
    message: string;
    accountId?: string;
    error?: string;
  }
  