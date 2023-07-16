import React from "react";

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
