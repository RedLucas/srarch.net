import React from "react"
import { MemoryVideo } from "../components/MemoryVideo"
import Link from "next/link"

export default function Memory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <p>
          This video was played at the memorial of Søren Rasmussen. Created by
          his sons, Collin and Lucas Rasmussen, it depicts their impression of
          the three stages of Søren's life, through their eyes.
        </p>
        <p>
          The first stage is depicted by "Throwing it all away" by Genesis. It
          represents the time before the birth of his sons.{" "}
          <Link
            className=" text-blue-600 dark:text-blue-500 hover:underline"
            href="https://music.apple.com/ca/album/throwing-it-all-away/396483774?i=396483957"
          >
            Link to download
          </Link>
        </p>
        <p>
          The second stage is also sung by Phil Collins, "You'll be in my
          heart". It represents the time he spent raising his kids.{" "}
          <Link
            className=" text-blue-600 dark:text-blue-500 hover:underline"
            href="https://music.apple.com/ca/album/youll-be-in-my-heart/1437333655?i=1437333914"
          >
            Link to download
          </Link>
        </p>
        <p>
          The final stage is "Take it easy" by The Eagles. It represents a time
          of his life that was unfortunately cut short. A time that he spent
          enjoying the life he built for himself, even though actually{" "}
          <em>taking it easy</em> was difficult to actually accomplish.{" "}
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
