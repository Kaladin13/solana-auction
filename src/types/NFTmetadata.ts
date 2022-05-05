import { MetadataKey } from "@nfteyez/sol-rayz/dist/config/metaplex"

export type NTFmetadata = {
    nfts_owned: string[],
    nfts_metadata: NFTdata[]
}

type NFTdata = {
    isMutable: boolean,
    mint: string,
    primarySaleHappened: boolean,
    updateAuthority: string,
    explorerUrl: string,
    data: {
        name: string,
        uri: string,
        verified: number[],
        share: number[],
        creators: string[]
    }
}

export type tokenData = {
    mint: string;
    updateAuthority: string;
    data: {
        creators: any[];
        name: string;
        symbol: string;
        uri: string;
        sellerFeeBasisPoints: number;
    };
    key: MetadataKey;
    primarySaleHappened: boolean;
    isMutable: boolean;
    editionNonce: number;
    masterEdition?: string;
    edition?: string;
}