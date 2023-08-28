"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useWeb3Modal } from "@web3modal/react";
import { useEffect, useState } from "react";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { Link, Plus, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function Home() {
  // wallet connect
  const { open, close } = useWeb3Modal();
  const { status, address } = useAccount();

  // States
  const [statusChecked, setStatusChecked] = useState<boolean>(false);
  const [scWallet, setScWallet] = useState<`0x${string}`>();
  const [scWalletBalance, setScWalletBalance] = useState<number>();

  // smart contract interactors
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  // events and effects
  useEffect(() => {
    setInterval(() => setStatusChecked(true), 2000);
  }, []);

  return (
    <div className="flex items-center justify-center w-screen min-h-screen">
      <Card className="w-1/2 max-w-lg">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-3xl">Wallet</h2>
            </div>
            <div className="flex gap-3">
              <Button onClick={open}>
                <Link size={20} />
              </Button>
              <Button onClick={open}>
                <Plus size={20} />
              </Button>
              <Button onClick={open}>
                <RefreshCcw size={20} />
              </Button>
            </div>
          </div>
          <Separator className="my-4" />
        </CardHeader>
        <CardContent>
          <h2 className="font-bold text-2xl mb-2">
            {scWalletBalance
              ? `${scWalletBalance?.toString()} ETH`
              : "0.00 ETH"}
          </h2>
          <h4 className="font-semibold text-slate-600">
            {scWallet ? scWallet : "Click the + icon to create account"}
          </h4>

          {/* deposit money */}
          <Separator className="my-4" />
          <p className="text-lg font-bold mb-3">Deposit Money</p>
          <div className="flex gap-3">
            <Input
              className="max-w-xs"
              // value={}
              onChange={(e) => {}}
              placeholder="Enter the amount to deposit"
              type="number"
            />
            <Button onClick={() => {}}>Deposit</Button>
          </div>

          {/* withdraw section */}
          <Separator className="my-4" />
          <p className="text-lg font-bold mb-3">Withdraw Money</p>
          <div className="flex gap-3">
            <Input
              className="max-w-xs"
              // value={}
              onChange={(e) => {}}
              placeholder="Enter the amount to withdraw"
              type="number"
            />
            <Button onClick={() => {}}>Withdraw</Button>
          </div>

          {/* transfer section */}
          <Separator className="my-4" />
          <p className="text-lg font-bold mb-3">Transfer Money</p>
          <Input
            className="max-w-xs mb-3"
            // value={}
            onChange={(e) => {}}
            placeholder="The address to send the money"
            type="text"
          />
          <Input
            className="max-w-xs mb-3"
            // value={}
            onChange={(e) => {}}
            placeholder="The amount to send"
            type="number"
          />
          <Button onClick={() => {}}>Transfer</Button>
        </CardContent>
      </Card>
    </div>
  );
}
