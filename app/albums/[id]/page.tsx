import AlbumArt from "@/components/album-art";
import { IAlbum } from "@/lib/interface/album";

// RSC
const AlbumDetail = async ({ params }: any) => {
  const response = await fetch(`http://localhost:4000/albums/${params.id}`);
  const album: IAlbum = await response.json();

  return (
    <>
      <AlbumArt album={album}/>
      <div className="container mx-auto p-8 mt-4">
        <h2 className="text-2xl font-bold">Songs</h2>
        <ul className="divide-y divide-gray-700">
          <li className="py-2 flex justify-between items-center">
            <button className="material-icons text-green-400 hover:text-green-300 text-lg mx-1">
              play_arrow
            </button>
            <div className="flex-grow text-left ml-4">
              <span className="text-md">Song Title 1</span>
              <br />
              <span className="text-xs text-gray-400">By Singer</span>
            </div>
            <span className="text-xs text-gray-400">3:45</span>
          </li>
        </ul>

        <div className="container mx-auto p-8 mt-4">
          <h2 className="text-2xl font-bold mb-4">Related Albums</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-4 rounded text-left">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Album"
                  className="w-full rounded mb-2"
                />
                <div className="absolute bottom-0 right-0 p-2 flex space-x-2">
                  <button className="bg-green-400 text-white rounded-full p-2 hover:bg-green-300 material-icons">
                    library_add
                  </button>
                  <button className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 material-icons">
                    add_shopping_cart
                  </button>
                </div>
              </div>
              <p className="text-md font-bold">Album Name</p>
              <p className="text-sm text-gray-400">By Singer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumDetail;
