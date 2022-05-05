import React from 'react';
import TokenButton from './TokenButton';
import {
    useAnchorWallet,
    useConnection,
    useWallet,
} from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

const MyWallet: React.FC = () => {
    const { connection } = useConnection();
    let walletAddress = "";

    const wallet = useWallet();

    if (wallet.connected && wallet.publicKey) {
        walletAddress = wallet.publicKey.toString()
    }

    return (
        <>
            {wallet.connected &&
                (<p>Your wallet is {walletAddress}</p> ||
                <p>Hello! Click the button to connect</p>)
            }

            <div className="multi-wrapper">
                <span className="button-wrapper">
                    <WalletModalProvider>
                        <WalletMultiButton />
                    </WalletModalProvider>
                </span>
                {wallet.connected && <WalletDisconnectButton />}
            </div>
            <div>
                {wallet.connected && <TokenButton publicKey={"C7e8iDGWKhEd3edn1AsmQ2NLAcN69b8MZtdZhf5VEukL"}/>}
            </div>
        </>
    );
};

export default MyWallet;
