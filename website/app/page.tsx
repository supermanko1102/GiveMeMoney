import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search, Globe, X, Trophy, DollarSign, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Contributor {
  id: string;
  name: string;
  amount: number;
  message: string;
  avatar: string;
  link?: string;
}

const TOP_CONTRIBUTORS: Contributor[] = [
  {
    id: "1",
    name: "ENTIRELESS.COM",
    amount: 20,
    message: "ENTIRELESS CONNECTS TOP TALENT WITH...",
    avatar: "/placeholder.svg", // Will need real images
    link: "https://entireless.com",
  },
  {
    id: "2",
    name: "CREATING BETTER DAYS",
    amount: 10,
    message: "OUR GUMMIES MADE ME DO...",
    avatar: "/placeholder.svg",
    link: "https://example.com",
  },
  {
    id: "3",
    name: "CLAY UNICORN",
    amount: 10,
    message: "HAVE A BEER.",
    avatar: "/placeholder.svg",
    link: "https://example.com",
  },
];

const RECENT_CONTRIBUTORS: Contributor[] = [
  {
    id: "4",
    name: "ENTIRELESS.COM",
    amount: 20,
    message: "ENTIRELESS CONNECTS TOP TALENT WITH...",
    avatar: "/placeholder.svg",
    link: "https://entireless.com",
  },
  {
    id: "5",
    name: "AI STARTUP SEO",
    amount: 1,
    message: "🔥HOT🔥 SUPERCHARGE YOUR AI SAAS TECH...",
    avatar: "/placeholder.svg",
    link: "https://example.com",
  },
  {
    id: "6",
    name: "FEEDBACKWIDGET",
    amount: 1,
    message: "Simple feedback for all your projects",
    avatar: "/placeholder.svg",
    link: "https://example.com",
  },
  {
    id: "7",
    name: "WISHKIT",
    amount: 1,
    message: "THE BEST IOS APP FEATURE IDEAS",
    avatar: "/placeholder.svg",
    link: "https://example.com",
  },
  {
    id: "8",
    name: "CREATING BETTER DAYS",
    amount: 10,
    message: "OUR GUMMIES MADE ME DO IT",
    avatar: "/placeholder.svg",
    link: "https://example.com",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-green-500 selection:text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#" className="hover:text-white transition-colors">PRESS</Link>
            <Link href="#" className="hover:text-white transition-colors">MEET THE MILLIONAIRE</Link>
            <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
          </nav>
          
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-xl font-bold tracking-tighter">One Million Scam</h1>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium hover:text-white hover:bg-white/10">
              GIVE ME MONEY
            </Button>
            <Button variant="ghost" className="text-sm font-medium hover:text-white hover:bg-white/10">
              THE F**K IS THIS?
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Intro Section */}
        <div className="space-y-6">
          <h1 className="text-6xl font-extrabold tracking-tight lg:text-8xl">
            The Hall of Shameless
          </h1>
          <p className="max-w-2xl text-xl text-muted-foreground">
            These legends didn't buy a $9.95 PDF on "How to grow your SaaS" they just gave me money for no reason. Be like them.
          </p>

          <div className="flex items-center gap-8 pt-8">
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <Users className="w-5 h-5 text-green-500" />
              <span className="text-2xl font-bold text-white">22</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">"Customers"</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <DollarSign className="w-5 h-5 text-green-500" />
              <span className="text-2xl font-bold text-white">$63.65</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Scammed So Far</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-end border-b border-white/10 pb-8">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="SEARCH..." 
              className="pl-10 bg-transparent border-white/20 text-white placeholder:text-muted-foreground focus-visible:ring-green-500 uppercase"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span>TOP CONTRIBUTORS</span>
          </div>
        </div>

        {/* Top Contributors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOP_CONTRIBUTORS.map((contributor, index) => (
            <Card key={contributor.id} className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors group relative overflow-hidden">
              <div className="absolute top-4 right-4 z-10">
                <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20">
                  ${contributor.amount}
                </Badge>
              </div>
              <div className="absolute top-4 left-4 z-10">
                 <Badge variant="outline" className={`
                   ${index === 0 ? 'border-yellow-500 text-yellow-500' : ''}
                   ${index === 1 ? 'border-zinc-400 text-zinc-400' : ''}
                   ${index === 2 ? 'border-amber-700 text-amber-700' : ''}
                 `}>
                    #{index + 1}
                 </Badge>
              </div>
              
              <CardHeader className="pt-12 pb-2">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                        {/* Placeholder for avatar */}
                        <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-bold text-sm tracking-tight text-white">{contributor.name}</h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-2">
                           <Globe className="w-3 h-3" />
                           {new URL(contributor.link || 'https://example.com').hostname}
                        </p>
                    </div>
                 </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed uppercase">
                    {contributor.message}
                </p>
              </CardContent>
              <CardFooter className="pt-0 pb-4">
                 <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="w-8 h-8 rounded-full hover:bg-white/10 hover:text-white">
                        <X className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="w-8 h-8 rounded-full hover:bg-white/10 hover:text-white">
                        <Globe className="w-4 h-4" />
                    </Button>
                 </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* All Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {RECENT_CONTRIBUTORS.map((contributor) => (
            <Card key={contributor.id} className="bg-black border-zinc-900 hover:border-zinc-700 transition-colors group relative">
                 <div className="aspect-video w-full bg-zinc-900 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                    {/* Placeholder for post image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center text-zinc-700">
                        <span className="font-bold text-2xl opacity-20">IMG</span>
                    </div>
                    
                    <div className="absolute top-2 right-2">
                        <Badge className="bg-green-500 text-black font-bold hover:bg-green-400">
                            ${contributor.amount}
                        </Badge>
                    </div>
                 </div>

                 <CardContent className="p-4 space-y-3">
                    <h3 className="font-bold text-white text-sm uppercase truncate">{contributor.name}</h3>
                    <p className="text-xs text-zinc-400 line-clamp-2 min-h-[2.5em] uppercase">
                        {contributor.message}
                    </p>
                 </CardContent>
                 
                 <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <Button size="icon" variant="ghost" className="w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-white">
                        <X className="w-3 h-3" />
                    </Button>
                    <Button size="icon" variant="ghost" className="w-8 h-8 rounded-full hover:bg-zinc-800 text-zinc-500 hover:text-white">
                        <Globe className="w-3 h-3" />
                    </Button>
                 </CardFooter>
            </Card>
           ))}
        </div>
      </main>
    </div>
  );
}
