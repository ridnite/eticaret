'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Shield, TrendingUp, Zap, HomeIcon, Car, Smartphone, Briefcase, Shirt, Gamepad2, Baby, Wrench, Heart, MapPin } from "lucide-react"

const categories = [
  {
    name: "Emlak",
    icon: HomeIcon,
    count: "2.1M",
    color: "text-blue-400",
  },
  {
    name: "Vasıta",
    icon: Car,
    count: "890K",
    color: "text-green-400",
  },
  {
    name: "Elektronik",
    icon: Smartphone,
    count: "1.5M",
    color: "text-purple-400",
  },
  {
    name: "İş İlanları",
    icon: Briefcase,
    count: "45K",
    color: "text-orange-400",
  },
  {
    name: "Moda",
    icon: Shirt,
    count: "320K",
    color: "text-pink-400",
  },
  {
    name: "Oyun & Hobi",
    icon: Gamepad2,
    count: "180K",
    color: "text-cyan-400",
  },
  {
    name: "Anne & Bebek",
    icon: Baby,
    count: "95K",
    color: "text-yellow-400",
  },
  {
    name: "Hizmetler",
    icon: Wrench,
    count: "120K",
    color: "text-red-400",
  },
]

const featuredListings = [
  {
    id: 1,
    title: "3+1 Satılık Daire - Merkez",
    price: "2.850.000 ₺",
    location: "Kadıköy, İstanbul",
    image: "/modern-apartment.png",
    category: "Emlak",
    isUrgent: true,
  },
  {
    id: 2,
    title: "2018 Model BMW 3.20i",
    price: "1.250.000 ₺",
    location: "Beşiktaş, İstanbul",
    image: "/luxury-bmw-car.jpg",
    category: "Vasıta",
    isUrgent: false,
  },
  {
    id: 3,
    title: "iPhone 15 Pro Max 256GB",
    price: "65.000 ₺",
    location: "Çankaya, Ankara",
    image: "/iphone-15-pro-max.png",
    category: "Elektronik",
    isUrgent: false,
  },
  {
    id: 4,
    title: "Yazılım Geliştirici - Remote",
    price: "45.000 ₺/ay",
    location: "İstanbul",
    image: "/software-developer-workspace.jpg",
    category: "İş İlanları",
    isUrgent: true,
  },
  {
    id: 5,
    title: "Gaming Laptop - RTX 4070",
    price: "85.000 ₺",
    location: "Konak, İzmir",
    image: "/gaming-laptop-setup.jpg",
    category: "Elektronik",
    isUrgent: false,
  },
  {
    id: 6,
    title: "Villa - Deniz Manzaralı",
    price: "8.500.000 ₺",
    location: "Bodrum, Muğla",
    image: "/luxury-villa-sea-view.jpg",
    category: "Emlak",
    isUrgent: false,
  },
]

export default function Home() {
  const router = useRouter()

  return (
    <div className="w-full flex flex-col items-center">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="absolute inset-0 bg-dot-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Türkiye'nin
              <span className="text-primary block">Modern Pazaryeri</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Milyonlarca ilan arasından aradığınızı bulun. Emlak, araç, elektronik ve daha fazlası için güvenli platform.
            </p>
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Ne arıyorsunuz? (örn: iPhone, daire, araba)"
                  className="pl-12 pr-32 h-14 text-lg bg-card border-border"
                />
                <Button
                  size="lg"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Ara
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">En İyi Fiyatlar</h3>
                <p className="text-sm text-muted-foreground">Rekabetçi fiyatlarla alım satım yapın</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Güvenli İşlemler</h3>
                <p className="text-sm text-muted-foreground">Doğrulanmış kullanıcılar ve güvenli ödeme</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Hızlı Sonuçlar</h3>
                <p className="text-sm text-muted-foreground">Anında arama ve filtreleme</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-balance">Kategoriler</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.name}
                  className="p-6 hover:bg-accent/50 transition-colors cursor-pointer group border-border bg-card"
                  onClick={() => router.push(`/`)}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`p-3 rounded-full bg-muted/50 group-hover:bg-muted transition-colors`}>
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count} ilan</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      <section className="py-12 w-full bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-balance">Öne Çıkan İlanlar</h2>
            <Button variant="outline">Tümünü Gör</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map((listing) => (
              <Card
                key={listing.id}
                className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer bg-card border-border"
              >
                <div className="relative">
                  <img
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  {listing.isUrgent && (
                    <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">Acil</Badge>
                  )}
                </div>

                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs">
                      {listing.category}
                    </Badge>
                    <h3 className="font-semibold text-card-foreground line-clamp-2">{listing.title}</h3>
                    <p className="text-2xl font-bold text-primary">{listing.price}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {listing.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
