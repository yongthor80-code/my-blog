import Link from "next/link"
import { FileText, Users, Eye } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    { 
      title: "Posts", 
      value: "12", 
      desc: "ບົດຄວາມທັງໝົດ", 
      icon: FileText, 
      color: "text-blue-600", 
      bgColor: "bg-blue-100 dark:bg-blue-900/30" 
    },
    { 
      title: "Followers", 
      value: "1,240", 
      desc: "ຜູ້ຕິດຕາມ", 
      icon: Users, 
      color: "text-emerald-600", 
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30" 
    },
    { 
      title: "Views", 
      value: "8,430", 
      desc: "ຂອດເບິ່ງເດືອນນີ້", 
      icon: Eye, 
      color: "text-amber-600", 
      bgColor: "bg-amber-100 dark:bg-amber-900/30" 
    },
  ]

  return (
    <div className="mx-auto max-w-5xl p-6 md:p-8 space-y-8">
      {/* Header: ມີແຕ່ປຸ່ມ Logout */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">ຍິນດີຕ້ອນຮັບກັບຄືນ, Yongthor! 👋</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Link 
            href="/login" 
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Logout
          </Link>
        </div>
      </div>

      {/* ກ່ອງສະຖິຕິ */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <div className={`rounded-full p-2 ${stat.bgColor} ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4">
                <h2 className="text-3xl font-bold text-card-foreground">{stat.value}</h2>
                <p className="text-xs text-muted-foreground mt-1">{stat.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}