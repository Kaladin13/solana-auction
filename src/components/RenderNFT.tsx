import React, { useEffect, useState } from 'react'
import { NTFmetadata, tokenData } from '../types/NFTmetadata';

type Props = {
    metadata: tokenData[]
}

type viewNFT = {
    imageURL: string,
    name: string,
}

export default function RenderNFT({ metadata }: Props) {

    const getNFTImage = async (dataAddress: string) => {
        try {
            const response = await fetch(dataAddress);
            const api = response.url;
            const imResp = await fetch(api);
            const data = await imResp.json();
            return data.image;
        }
        catch (e) {
            console.log(e);
        }
    }

    const [nftArray, setNftArray] = useState([] as unknown as viewNFT[]);

    // const nft = new Array<viewNFT>();

    useEffect(() => {
        const f = async () => {
            for (const val of metadata) {
                const image = await getNFTImage(val.data.uri);
                const name = val.data.name;
                const newNft: viewNFT = {imageURL: image, name: name};
                // nft.push({ name: name, imageURL: image });
                //@ts-ignore
                setNftArray(arr => [...arr, newNft]);
            }
        }
        f();
    }, [metadata]);

    return (
        <div>
            {nftArray.map((val, ind) => {
                return (
                    <li
                        key={ind}
                    >
                        <img src={val.imageURL} alt='nft' />
                        {val.name}
                    </li>
                )
            })}
        </div>
    )
}