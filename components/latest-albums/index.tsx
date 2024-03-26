import { IAlbum } from "@/lib/interface/album";
import AlbumListing from "../album-listing";

// RSC
const LatestAlbums = async () => {
  const response = await fetch("http:localhost:4000/latest-albums", {
    next: { revalidate: 30 },
  });
  const json = await response.json();
  return <AlbumListing title="Latest Albums" albums={json} />;
};

export default LatestAlbums;
