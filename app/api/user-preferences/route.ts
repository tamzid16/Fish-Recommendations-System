import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const userPreferences = await prisma.userPreferences.findUnique({
    where: { userId: session.user.id },
  })

  return NextResponse.json(userPreferences || {})
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const data = await request.json()

  const userPreferences = await prisma.userPreferences.upsert({
    where: { userId: session.user.id },
    update: data,
    create: { ...data, userId: session.user.id },
  })

  return NextResponse.json(userPreferences)
}

