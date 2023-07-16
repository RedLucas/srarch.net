import React from "react"

export default function MemoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1 className="text-3xl py-10">In Memory of Søren Rasmussen</h1>
      <main className="container p-3">{children}</main>
    </>
  )
}
