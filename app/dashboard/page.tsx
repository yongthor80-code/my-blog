import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const stats = [
  { title: "Posts", value: "12", note: "ບົດຄວາມທັງໝົດ" },
  { title: "Followers", value: "1,240", note: "ຜູ້ຕິດຕາມ" },
  { title: "Views", value: "8,430", note: "ຍອດເບິ່ງເດືອນນີ້" },
]

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            ຍິນດີຕ້ອນຮັບ, Yongthor
          </p>
        </div>
        <Button variant="outline" render={<Link href="/login" />}>
          Logout
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardDescription>{item.title}</CardDescription>
              <CardTitle className="text-2xl">{item.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{item.note}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
