'use client'
import React, { useState } from "react"
import { Search, Menu, User, Heart, MessageCircle, ShoppingBasket, BoxIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/authStore"

const Header = () => {
    const router = useRouter();
    const { user, isAuthenticated, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container px-4 mx-auto w-full max-w-356">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="text-2xl font-bold text-primary">E-ticaret</div>
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
                            isAuthenticated ? (
                                <>
                                    <Button variant="ghost" size="sm" className="hidden md:flex">
                                        <BoxIcon className="h-4 w-4 mr-2" />
                                        Siparişlerim
                                    </Button>
                                    <Button variant="ghost" size="sm" className="hidden md:flex">
                                        <ShoppingBasket className="h-4 w-4 mr-2" />
                                        Sepet
                                    </Button>
                                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">İlan Ver</Button>
                                    <DropdownMenu >
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                                <User className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Merhaba, {user?.name}</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>Hesabım</DropdownMenuItem>
                                            <DropdownMenuItem>İlanlarım</DropdownMenuItem>
                                            <DropdownMenuItem>Favorilerim</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={handleLogout}>
                                                Çıkış Yap
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </>)
                                : (
                                    <>
                                        <Button variant="ghost" onClick={() => router.push("/auth/login")}>Giriş yap</Button>
                                        <Button onClick={() => router.push("/auth/register")}>Kayıt ol</Button>
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