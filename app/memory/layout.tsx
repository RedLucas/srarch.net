import React from "react";

export const runtime = "edge";

export default function MemoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="container p-3">
        <h1 className="text-3xl py-10">In Memory of Søren Rasmussen</h1>
        {children}
      </main>
    </>
  );
}
