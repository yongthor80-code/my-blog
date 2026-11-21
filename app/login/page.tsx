"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault() // ກັນບໍ່ໃຫ້ browser reload ໜ້າ

    if (!email.includes("@")) {
      setError("ກະລຸນາໃສ່ Email ໃຫ້ຖືກຕ້ອງ")
      return
    }
    if (password.length < 6) {
      setError("Password ຕ້ອງມີຢ່າງໜ້ອຍ 6 ຕົວອັກສອນ")
      return
    }

    setError("")
    router.push("/dashboard")
  }

  return (
    <main className="flex justify-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-lg">Login</CardTitle>
          <CardDescription>
            ໃສ່ Email ແລະ Password ເພື່ອເຂົ້າສູ່ລະບົບ
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit} noValidate>
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field>
              {error && <FieldError>{error}</FieldError>}
            </FieldGroup>
          </CardContent>

          <CardFooter className="mt-4 flex-col items-stretch gap-3">
            <Button type="submit" size="lg">
              Login
            </Button>
            <FieldDescription className="text-center">
              ຍັງບໍ່ມີບັນຊີ? <Link href="/register">Register</Link>
            </FieldDescription>
          </CardFooter>
        </form>
      </Card>
    </main>
  )
}
