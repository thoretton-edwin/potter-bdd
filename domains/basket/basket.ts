export class Basket {
  private bookPrice = 8;
  private booksCount = 0;

  constructor(booksCount: number) {
    this.booksCount = booksCount;
  }

  public calculatePrice(): number {
    return this.bookPrice * this.booksCount;
  }
}
