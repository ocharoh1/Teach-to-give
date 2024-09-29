interface Album {
  title: string;
  artist: string;
  releaseYear: number;
}

//we will extend album interface to inherit all its properties and add them to the new interface

interface StudioAlbum extends Album {
  studio?: string;
  producer: string;
}
interface LiveAlbum extends Album {
  concertVenue: string;
  concertDate: Date;
}

const americanBeauty: StudioAlbum = {
  title: "American Beauty",
  artist: "Grateful Dead",
  releaseYear: 1970,
  //   studio: "Wally Heider Studios",
  producer: "Grateful Dead and Stephen Barncard",
};

const oneFromTheVault: LiveAlbum = {
  title: "One from the Vault",
  artist: "Grateful Dead",
  releaseYear: 1991,
  concertVenue: "Great American Music Hall",
  concertDate: new Date("1975-08-13"),
};

interface AlbumAllInfo extends Album, StudioAlbum, LiveAlbum {

}

const AlbumAllInfo: AlbumAllInfo = {
  title: "One from the Vault",
  artist: "Grateful Dead",
  releaseYear: 1991,
  concertVenue: "Great American Music Hall",
  concertDate: new Date("1975-08-13"),
  //   studio: "Wally Heider Studios",
  producer: "Grateful Dead and Stephen Barncard",
};

interface User {
    id: string;
    createdAt: Date;
    name: string;
    email: string;
  };
  
  interface Product extends User  {
        price: number;
  };




  type BaseAwards = "Grammy" | "Mercury prize" | "Billboard"

  type ExtendedAlbumAwards = Record <BaseAwards, boolean>&{

  }

  