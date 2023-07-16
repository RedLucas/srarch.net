import React from "react"
import { MemoryVideo } from "../components/MemoryVideo"
import Link from "next/link"

export default function Memory() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="order-1 lg:order-none">
        <p className="pb-5">
          This video was played at the memorial of Søren Rasmussen. Created by
          his sons, Collin and Lucas Rasmussen, it depicts their impression of
          the three stages of Søren&apos;s life, through their eyes.
        </p>
        <p className="pb-5">
          The first stage is depicted by &quot;Throwing it all away&quot; by
          Genesis. It represents the time before the birth of his sons.{" "}
          <Link
            className=" text-blue-600 dark:text-blue-500 hover:underline"
            href="https://music.apple.com/ca/album/throwing-it-all-away/396483774?i=396483957"
          >
            Link to download
          </Link>
        </p>
        <p className="pb-5">
          The second stage is also sung by Phil Collins, &quot;You&apos;ll be in
          my heart&quot;. It represents the time he spent raising his kids.{" "}
          <Link
            className=" text-blue-600 dark:text-blue-500 hover:underline"
            href="https://music.apple.com/ca/album/youll-be-in-my-heart/1437333655?i=1437333914"
          >
            Link to download
          </Link>
        </p>
        <p>
          The final stage is &quot;Take it easy&quot; by The Eagles. It
          represents a time of his life that was unfortunately cut short. A time
          that he spent enjoying the life he built for himself, even though
          actually <em>taking it easy</em> was difficult to actually accomplish.{" "}
          <Link
            className="text-blue-600 dark:text-blue-500 hover:underline"
            href="https://music.apple.com/ca/album/take-it-easy/635788137?i=635788139"
          >
            Link to download
          </Link>
        </p>
      </div>
      <div className="col-span-2">
        <MemoryVideo />
      </div>
    </div>
  )
}
