import React, { useEffect, useState } from 'react'
import RenderNFT from '../components/RenderNFT';
import { getTokenMetadata, getTokens } from '../scripts/getTokenMetadata';
import { NTFmetadata, tokenData } from '../types/NFTmetadata';

type Props = {
    publicKey: string
}

export default function TokenButton({ publicKey }: Props) {

    const [metadata, setMetadata] = useState(null as unknown as tokenData[]);


    useEffect(() => {
        
        const f = async () => {
            // const data = await getTokenMetadata(publicKey);
            const data = await getTokens(publicKey);
            console.log('get data', data);
            setMetadata(data);
        }
    
        f();
    }, []);
    

    return (
        <div>
            {metadata && <RenderNFT metadata={metadata}/>}
        </div>
    )
}