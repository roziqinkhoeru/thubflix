import { getDiscoverMovies } from "@/lib/getApi";
import HeaderCarousel from "./HeaderCarousel";

async function Header() {
  const discoveredMovies = await getDiscoverMovies();

  return <HeaderCarousel movies={discoveredMovies} />;
}

export default Header;
