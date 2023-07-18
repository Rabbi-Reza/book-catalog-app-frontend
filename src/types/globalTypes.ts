// export interface IProduct {
//   _id: number;
//   name: string;
//   image: string;
//   price: number;
//   features: string[];
//   status: boolean;
//   rating: number;
//   quantity?: number;
// }

export interface IBook {
  _id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: string[];
  uploader: string;
}