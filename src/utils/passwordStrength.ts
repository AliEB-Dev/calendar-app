export type PasswordStrength = 0 | 1 | 2 | 3

export function getPasswordStrength(password: string): PasswordStrength {
  if (password.length === 0) return 0

  let score = 0
  if (password.length >= 6) score++
  if (password.length >= 10 && /[A-Z]/.test(password) && /[0-9]/.test(password)) score++
  if (password.length >= 10 && /[!@#$%^&*]/.test(password)) score++

  return Math.min(score, 3) as PasswordStrength
}