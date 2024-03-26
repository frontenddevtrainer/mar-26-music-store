"use client"
import { IAlbum } from "@/lib/interface/album";
import { useCart } from "../context/cart";

export interface AlbumArtProps {
  album: IAlbum;
}

const AlbumArt = ({ album }: AlbumArtProps) => {
  const { addToCart } = useCart()

  return (
    <div className="relative">
      <img
        src="https://via.placeholder.com/1920x500"
        alt="Album"
        className="w-full"
      />
      <div className="absolute top-4 left-4">
        <h1 className="text-4xl font-bold text-white">{album.name}</h1>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center space-x-4">
        <button
          onClick={() => {
            addToCart(album);
          }}
          className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300"
        >
          Add to Cart
        </button>
        <button className="material-icons text-green-400 hover:text-green-300 text-3xl">
          play_arrow
        </button>
      </div>
    </div>
  );
};

export default AlbumArt;
