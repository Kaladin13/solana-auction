import { Connection, programs } from '@metaplex/js';
import { getParsedNftAccountsByOwner } from '@nfteyez/sol-rayz';
import { NTFmetadata, tokenData } from '../types/NFTmetadata';
import { apiKeys } from './apikey';
var theblockchainapi = require('theblockchainapi');
const { metadata: { Metadata } } = programs;


export const getTokenMetadata = async (pubWallet: string) => {
  try {

    const defaultClient = theblockchainapi.ApiClient.instance;

    let APIKeyID = defaultClient.authentications['APIKeyID'];
    APIKeyID.apiKey = apiKeys.keyId;

    let APISecretKey = defaultClient.authentications['APISecretKey'];
    APISecretKey.apiKey = apiKeys.secretKey;

    let apiInstance = new theblockchainapi.SolanaWalletApi();
    let network = 'devnet'; // String | The network ID (devnet, mainnet-beta)

    const result = await apiInstance.solanaGetNFTsBelongingToWallet(network, pubWallet)
      .then((data: any) => {
        console.log('API called successfully.');
        return data;
      }, (error: any) => {
        console.error(error);
        return error;
      });

    console.log("NFTs: ", result);

    return result as NTFmetadata;

  } catch {
    console.log('Failed to fetch metadata');
    return null as unknown as NTFmetadata;
  }
};


export const getTokens = async (publicKey: string) => {
  try {
    const nftArray = await
      getParsedNftAccountsByOwner({ publicAddress: publicKey }) as unknown as tokenData[];
      return nftArray;
  }
  catch (e) {
    console.log(e);
    return null as unknown as tokenData[];
  }
}