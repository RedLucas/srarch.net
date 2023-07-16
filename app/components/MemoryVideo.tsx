"use client"
import { Stream } from "@cloudflare/stream-react"
import React from "react"

export const MemoryVideo = () => {
  const videoIdOrSignedUrl = "93b7f810ae07b2e79e3d47e2afbc6b3a"
  return (
    <div>
      <Stream controls src={videoIdOrSignedUrl} />
    </div>
  )
}
