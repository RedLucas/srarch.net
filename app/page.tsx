"use client"
import Link from "next/link"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Image from "next/image"

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <div>
      <Carousel responsive={responsive}>
        <div>
          <Image src="/carousel/sobre.jpg" alt="" width={2000} height={2000} />
          <p className="legend">Architectural, planning & interior design</p>
        </div>
        <div>
          <Image
            src="/carousel/sunshine-coast.jpg"
            alt=""
            width={2000}
            height={2000}
          />
          <p className="legend">Award winning architecture studio</p>
        </div>
        <div>
          <Image
            src="/carousel/waterfront.jpg"
            alt=""
            width={2000}
            height={2000}
          />
          <p className="legend">
            Internationally recognized for creativity & originality
          </p>
        </div>
      </Carousel>
    </div>
  )
}

export default Home
