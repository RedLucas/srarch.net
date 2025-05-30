import Carousel from "./components/Carousel"

const Home = async () => {
  const {slides} = (await import("./manifest.json")).default;
  return (
    <div>
      <Carousel slides={slides} />
    </div>
  )
}

export default Home
