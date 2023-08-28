"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { useWeb3Modal } from "@web3modal/react";
import { useEffect, useState } from "react";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { open, close } = useWeb3Modal();
  const { status, address } = useAccount();
  const [statusChecked, setStatusChecked] = useState<boolean>(false);

  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  useEffect(() => {
    setInterval(() => setStatusChecked(true), 2000);
  }, []);

  return (
    <div className="flex items-center justify-center w-screen min-h-screen">
      <Card>
        <CardHeader className="flex justify-between px-4">
          <p>Wallet</p>
          <Button onClick={open}>
            <Link size={20} />
          </Button>
        </CardHeader>
      </Card>
    </div>
  );
}
