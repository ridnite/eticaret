'use client'
import React, { useState } from "react"
import { Search, Menu, User, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Header = () => {
    const [signedIn, setSignedIn] = useState(false);
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container px-4 mx-auto w-full max-w-356">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="text-2xl font-bold text-primary">MarketPlace</div>
                    </div>
                    <div className="hidden md:block flex-1 max-w-2xl mx-8">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Emlak, vasıta, elektronik, iş ilanları..."
                                className="pl-10 bg-muted/50 border-border"
                            />
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 md:space-x-4">
                        {
                            signedIn ? (
                                <>
                                    <Button variant="ghost" size="sm" className="hidden md:flex redheart">
                                        <Heart className="h-4 w-4 mr-2" />
                                        Favoriler
                                    </Button>
                                    <Button variant="ghost" size="sm" className="hidden md:flex">
                                        <MessageCircle className="h-4 w-4 mr-2" />
                                        Mesajlar
                                    </Button>
                                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">İlan Ver</Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <User className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>Hesabım</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </>)
                                : (
                                    <>
                                        <Button variant="ghost">Giriş yap</Button>
                                        <Button>Kayıt ol</Button>
                                    </>
                                )
                        }
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header