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

type Errors = {
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
}

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState<Errors>({})

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    // e.target.id ກົງກັບຊື່ key ໃນ form (name, email, ...)
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  function validate(): Errors {
    const newErrors: Errors = {}
    if (form.name.trim() === "") {
      newErrors.name = "ກະລຸນາໃສ່ຊື່"
    }
    if (!form.email.includes("@")) {
      newErrors.email = "ກະລຸນາໃສ່ Email ໃຫ້ຖືກຕ້ອງ"
    }
    if (form.password.length < 6) {
      newErrors.password = "Password ຕ້ອງມີຢ່າງໜ້ອຍ 6 ຕົວອັກສອນ"
    }
    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Password ບໍ່ກົງກັນ"
    }
    return newErrors
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    // ຖ້າບໍ່ມີ error ຈັກອັນ → ໄປໜ້າ Login
    if (Object.keys(newErrors).length === 0) {
      router.push("/login")
    }
  }

  return (
    <main className="flex justify-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-lg">Register</CardTitle>
          <CardDescription>ສ້າງບັນຊີໃໝ່ຂອງເຈົ້າ</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit} noValidate>
          <CardContent>
            <FieldGroup>
              <Field data-invalid={!!errors.name}>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <FieldError>{errors.name}</FieldError>}
              </Field>

              <Field data-invalid={!!errors.email}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </Field>

              <Field data-invalid={!!errors.password}>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  aria-invalid={!!errors.password}
                />
                {errors.password && <FieldError>{errors.password}</FieldError>}
              </Field>

              <Field data-invalid={!!errors.confirmPassword}>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm password
                </FieldLabel>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  aria-invalid={!!errors.confirmPassword}
                />
                {errors.confirmPassword && (
                  <FieldError>{errors.confirmPassword}</FieldError>
                )}
              </Field>
            </FieldGroup>
          </CardContent>

          <CardFooter className="mt-4 flex-col items-stretch gap-3">
            <Button type="submit" size="lg">
              Register
            </Button>
            <FieldDescription className="text-center">
              ມີບັນຊີແລ້ວ? <Link href="/login">Login</Link>
            </FieldDescription>
          </CardFooter>
        </form>
      </Card>
    </main>
  )
}
