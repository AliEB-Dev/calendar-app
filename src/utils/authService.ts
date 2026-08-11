import type { User,AuthUser } from "../store/types/types";

const BASE_URL = "http://localhost:3001"

export async function findUserByEmail(email: string): Promise<User | null> {

    const res = await fetch(`${BASE_URL}/users?email=${encodeURIComponent(email)}`)
    if (!res.ok) throw new Error("خطا در ارتباط با سرور")
    const users: User[] = await res.json()
    return users[0] ?? null
}

export async function createUser(name: string, email: string, password: string): Promise<User> {
    const res = await fetch(`${BASE_URL}/users`,{
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body : JSON.stringify({name,email,password})
    })

    if (!res.ok) throw new Error("خطا در ثبت‌ نام")
    return res.json()
}

export async function updateUserAvatar(userId:string , avatarUrl : string):Promise<User> {
    const res = await fetch(`${BASE_URL}/users/${userId}`,{
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ avatarUrl }),
  })
  if (!res.ok) throw new Error("خطا در بروزرسانی تصویر")
  return res.json()
}
export async function updateUserProfile(userId: string, name: string): Promise<User> {
  const res = await fetch(`${BASE_URL}/users/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
  if (!res.ok) throw new Error("خطا در بروزرسانی پروفایل")
  return res.json()
}
export function toAuthUser(user : User):AuthUser{
    return { id: user.id, name: user.name, email: user.email, avatarUrl: user.avatarUrl }

}