export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  createdAt: Date,
  name: string,
  stock: number,
  size?: Sizes
}
