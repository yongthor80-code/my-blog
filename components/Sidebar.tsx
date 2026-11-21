"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  FlaskConical,
  House,
  Info,
  LayoutDashboard,
  LogIn,
  Menu,
  ShoppingBag,
  UserPlus,
  X,
  UserCircle,
} from "lucide-react"

import ThemeToggle from "@/components/ThemeToggle"
import { cn } from "@/lib/utils"

type NavItem = {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

// ເມນູຫຼັກ
const mainLinks: NavItem[] = [
  { href: "/", label: "Home", icon: House },
  { href: "/products", label: "Products", icon: ShoppingBag },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/about", label: "About", icon: Info },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
]

// ເມນູຝຶກຫັດ
const practiceLinks: NavItem[] = [
  { href: "/use-state", label: "useState", icon: FlaskConical },
  { href: "/use-effect", label: "useEffect", icon: FlaskConical },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // ຈຳລອງການ Login
  const isLoggedIn = pathname === "/dashboard" || pathname.startsWith("/profile")

  function isActive(href: string) {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  function NavLink({ href, label, icon: Icon }: NavItem) {
    const active = isActive(href)
    return (
      <Link
        href={href}
        onClick={() => setOpen(false)}
        aria-current={active ? "page" : undefined}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          active
            ? "bg-primary text-primary-foreground"
            : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        )}
      >
        <Icon className="size-4" />
        {label}
      </Link>
    )
  }

  return (
    <>
      {/* ແຖບເທິງມືຖື */}
      <header className="fixed inset-x-0 top-0 z-20 flex h-14 items-center gap-3 border-b border-border bg-background px-4 md:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="rounded-lg p-2 hover:bg-muted"
        >
          <Menu className="size-5" />
        </button>
        <span className="font-semibold">My Blog</span>
      </header>

      {/* ພື້ນມືດດ້ານຫຼັງ (ມືຖື) */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0"
        )}
      >
        {/* ຫົວ Sidebar */}
        <div className="flex h-14 items-center justify-between border-b border-sidebar-border px-4">
          <Link href="/" className="text-lg font-semibold">
            My Blog
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-lg p-2 hover:bg-sidebar-accent md:hidden"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* ສ່ວນເມນູທັງໝົດ (ເຮັດໃຫ້ເລື່ອນໄດ້ຖ້າມັນຍາວ) */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-4">
          
          {/* 1. ເມນູຫຼັກ */}
          <div className="space-y-1">
            {mainLinks.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </div>

          {/* 2. ເມນູຝຶກຫັດ (ຍ້າຍຂຶ້ນມາຢູ່ກາງ) */}
          <div className="space-y-1">
            <p className="px-3 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Practice
            </p>
            {practiceLinks.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </div>

          {/* 3. ເມນູບັນຊີ (Login/Register ຫຼື Profile) */}
          <div className="space-y-1">
            <p className="px-3 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Account
            </p>
            {!isLoggedIn ? (
              <>
                <NavLink href="/login" label="Login" icon={LogIn} />
                <NavLink href="/register" label="Register" icon={UserPlus} />
              </>
            ) : (
              <NavLink href="/profile" label="Profile" icon={UserCircle} />
            )}
          </div>

        </nav>
      </aside>
    </>
  )
}