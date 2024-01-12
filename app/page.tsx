"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Web3AuthSigner } from "@alchemy/aa-signers/web3auth";

const clientId = process.env.NEXT_PUBLIC_API_KEY;

export const createWeb3AuthSigner = async () => {
  const signer = new Web3AuthSigner({
    clientId: clientId as string,
    web3AuthNetwork: "sapphire_devnet",
    chainConfig: {
      chainNamespace: "eip155",
    },
  });

  await signer.authenticate({
    init: async () => {
      await signer.inner.initModal();
    },
    connect: async () => {
      await signer.inner.connect();
    },
  });

  return signer;
};

export default function Home() {
  return (
    <>
      <button onClick={createWeb3AuthSigner}>Test</button>
    </>
  );
}
