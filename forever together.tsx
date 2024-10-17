import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Users, User, LogOut } from "lucide-react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-100">
          <aside className="w-64 bg-white border-r">
            <div className="p-4">
              <h1 className="text-2xl font-bold text-primary">Forever Together</h1>
            </div>
            <nav className="mt-8">
              <Link href="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
                <MessageCircle className="mr-3" />
                Home
              </Link>
              <Link href="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
                <User className="mr-3" />
                Profile
              </Link>
              <Link href="/members" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
                <Users className="mr-3" />
                Members
              </Link>
            </nav>
            <div className="absolute bottom-0 w-64 p-4 border-t">
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-gray-500">john@example.com</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <LogOut className="mr-2 h-4 w-4" /> Log out
              </Button>
            </div>
          </aside>
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
