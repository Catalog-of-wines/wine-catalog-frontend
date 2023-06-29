export interface Wine {
  _id: string
  kind: string
  name: string
  color: string
  wine_type: string
  capacity: string
  package: string
  country: string
  region: string
  brand: string
  alcohol_percentage: string
  producer: string
  glass: string
  gastronomic_combination: string
  grape: string
  vintage: string
  diameter: string
  supplier: string
  price: string
  image_url: string
  small_image_url: string
  description: Description
}

export interface Description {
  name: string
  color: string
  aroma: string
  gastronomic: string
  why_buy: string
}

// export interface Wine {
//   id: number;
//   title: string;
//   description: string;
// }