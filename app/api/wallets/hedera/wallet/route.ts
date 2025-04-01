import { NextRequest, NextResponse } from 'next/server';
import { connectWallet } from '../utils';

export async function POST(req: NextRequest) {
  try {
    const { accountId, privateKey } = await req.json();

    if (!accountId || !privateKey) {
      return NextResponse.json({ error: 'Missing account details' }, { status: 400 });
    }

    const connectionResult = await connectWallet(accountId, privateKey);
    return NextResponse.json(connectionResult);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
