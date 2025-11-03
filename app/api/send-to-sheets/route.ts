import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbyqBFFhdhAGHffTH9sM7Ni8t1tzBWHuVj_8MnOiYsOW8yHTtH0Lokbcw1BBgx6Tcmeezw/exec?gid=0",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )

    const responseText = await res.text()
    return NextResponse.json({ ok: true, response: responseText })
  } catch (error) {
    console.error("Erro no proxy:", error)
    return NextResponse.json({ ok: false, error: "Erro no envio" }, { status: 500 })
  }
}
