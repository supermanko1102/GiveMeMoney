"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Check, Minus, Plus, Wallet, Banknote } from "lucide-react";
import { useState } from "react";

export function DonateSheet({ children }: { children: React.ReactNode }) {
  const [amount, setAmount] = useState(1);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full sm:max-w-[900px] border-zinc-800 bg-black p-0 sm:flex">
        <SheetHeader className="sr-only">
          <SheetTitle>捐贈選項</SheetTitle>
          <SheetDescription>選擇你的付款方式</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col sm:flex-row w-full h-full overflow-y-auto">
          {/* Left Column: Crypto */}
          <div className="flex-1 p-8 border-b sm:border-b-0 sm:border-r border-zinc-900 bg-black text-white relative flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-purple-500" />
                </div>
                <Badge variant="outline" className="border-purple-500/20 text-purple-400 font-mono">
                  純度 x402
                </Badge>
              </div>

              <div className="space-y-4">
                <Badge className="bg-white text-black hover:bg-white/90">
                  最屌的選擇
                </Badge>
                <h3 className="text-3xl font-bold tracking-tight">加密貨幣大佬專區</h3>
                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                  沒有中間商，只有你的錢包和我的，純粹的智商稅，絕對安全。
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-zinc-500 uppercase">金額 (USDC)</Label>
                  <Input 
                    type="number" 
                    placeholder="1.00" 
                    className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-600 font-mono"
                  />
                </div>
                
                <div className="space-y-2">
                    <Label className="text-xs font-bold text-zinc-500 uppercase">貨幣資產</Label>
                    <Select defaultValue="usdc">
                        <SelectTrigger className="bg-zinc-900/50 border-zinc-800 text-white font-mono">
                            <SelectValue placeholder="選擇貨幣" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                            <SelectItem value="usdc">USDC (Base)</SelectItem>
                            <SelectItem value="eth">ETH (Mainnet)</SelectItem>
                            <SelectItem value="sol">SOL (Solana)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Button className="w-full bg-white text-black hover:bg-zinc-200 font-bold tracking-wide py-6">
                  用加密貨幣支付 -&gt;
                </Button>
              </div>

              <div className="space-y-4 pt-4">
                 <p className="text-xs font-bold text-zinc-500 uppercase">購買這張贖罪券，你將獲得：</p>
                 <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                        <span>幫助開發者逃離這無聊的世界</span>
                    </li>
                    <li className="flex gap-3 text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                        <span>獲得一份 AI 生成的「如何不被騙」指南</span>
                    </li>
                    <li className="flex gap-3 text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                        <span>立刻獲得優越感，這可是那些用信用卡的人永遠無法體會的</span>
                    </li>
                 </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Fiat */}
          <div className="flex-1 p-8 bg-zinc-950 text-white relative flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Banknote className="w-6 h-6 text-green-500" />
                </div>
                <Badge variant="outline" className="border-green-500/20 text-green-400 font-mono">
                  通膨法幣
                </Badge>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold tracking-tight">一般死老百姓專區</h3>
                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                  沒有加密貨幣？真丟臉。但我還是會收你的髒錢，畢竟我不挑食。
                </p>
              </div>

              <div className="space-y-6">
                <div>
                    <div className="text-4xl font-bold font-mono tracking-tighter">
                        $1.00 <span className="text-sm font-normal text-zinc-500">USD</span>
                    </div>
                    <p className="text-xs font-bold text-zinc-500 uppercase mt-2">選擇你的贖罪等級 (最低 $1)</p>
                </div>
                
                <div className="space-y-2">
                    <Label className="text-xs font-bold text-zinc-500 uppercase">數量 (後悔單位)</Label>
                    <div className="flex items-center">
                        <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-12 w-12 rounded-l-md border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:text-white"
                            onClick={() => setAmount(Math.max(1, amount - 1))}
                        >
                            <Minus className="w-4 h-4" />
                        </Button>
                        <div className="h-12 flex-1 flex items-center justify-center border-y border-zinc-800 bg-zinc-900/30 text-lg font-mono font-bold">
                            {amount}
                        </div>
                        <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-12 w-12 rounded-r-md border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:text-white"
                            onClick={() => setAmount(amount + 1)}
                        >
                            <Plus className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <Button className="w-full bg-white text-black hover:bg-zinc-200 font-bold tracking-wide py-6">
                  用老人臭法幣支付 -&gt;
                </Button>
              </div>

              <div className="space-y-4 pt-4">
                 <p className="text-xs font-bold text-zinc-500 uppercase">為了感謝這筆微薄的貢獻，你會得到：</p>
                 <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>獲得一份 AI 生成的「如何不被騙」指南</span>
                    </li>
                    <li className="flex gap-3 text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>還可以幫我付 Stripe 手續費，真是貼心</span>
                    </li>
                    <li className="flex gap-3 text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                        <span>其實什麼都沒有。這行字的存在只是為了讓列表看起來長一點。</span>
                    </li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
