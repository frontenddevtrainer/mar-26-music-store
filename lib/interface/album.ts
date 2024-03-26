import { ISinger } from "./singer";
import { ISong } from "./song";

export interface IAlbum {
    id: string;
    name: string,
    price: number,
    songs: ISong[],
    singers: ISinger[]
}

