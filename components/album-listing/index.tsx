"use client";

import { IAlbum } from "@/lib/interface/album";
import Link from "next/link";

export interface AlbumListingProps {
  title: string;
  albums: IAlbum[];
}

const AlbumListing = ({ title, albums }: AlbumListingProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl text-green-400 mb-4">{title}</h2>
      <div className="grid grid-cols-5 gap-4">
        {!albums || (albums?.length === 0 && <div>No albums found.</div>)}

        {albums?.map((album) => {
          return (
            <div key={album.id} className="bg-gray-800 p-4 rounded relative">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Album"
                  className="w-full rounded mb-2"
                />
                <button className="absolute bottom-2 right-2 bg-green-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-300">
                  <span className="material-icons text-white">
                    {" "}
                    play_arrow{" "}
                  </span>
                </button>
              </div>

              <div className="text-left">
                <h3 className="text-md font-bold mb-1"><Link href={`/albums/${album.id}`}>{album.name}</Link></h3>
                <p className="text-sm mb-2 text-gray-400">By Singer</p>
                <p className="text-sm mb-2 text-green-200">$9.99</p>

                <a
                  href="#"
                  className="inline-flex items-center text-green-400 hover:text-green-300"
                >
                  <span className="material-icons"> shopping_cart </span>
                  <span
                    className="ml-1"
                    onClick={() => {
                      console.log("Add to cart");
                    }}
                  >
                    Add to Cart
                  </span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AlbumListing;
