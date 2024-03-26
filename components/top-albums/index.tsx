import { IAlbum } from "@/lib/interface/album";
import AlbumListing from "../album-listing";

// RSC
const TopAlbums = async () => {
  const response = await fetch("http:localhost:4000/top-albums", {
    next: { revalidate: 30 },
  });
  const json = await response.json();
  return <AlbumListing title="Top Albums" albums={json} />;
};

export default TopAlbums;
