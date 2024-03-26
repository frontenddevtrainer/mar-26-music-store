import Banner from "@/components/banner";
import LatestAlbums from "@/components/latest-albums";
import TopAlbums from "@/components/top-albums";

export default function Home() {
  return (
    <>
      <Banner image="https://via.placeholder.com/1200x400" alt="Banner image" />
      <TopAlbums />
      <LatestAlbums/>
    </>
  );
}
