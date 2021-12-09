class Book {
  title: String;
  slug: String;
  isbn: String;
  author: String;
  publisher: String;
  synopsis: String;
  constructor(
    title: string,
    slug: string,
    isbn: string,
    author: string,
    publisher: string,
    synopsis: string
  ) {
    this.title = title;
    this.slug = slug;
    this.isbn = isbn;
    this.author = author;
    this.publisher = publisher;
    this.synopsis = synopsis;
  }
  toJson(){
      return {
        "title": `"${this.title}"`,
        "slug": `"${this.slug}"`,
        "isbn": `"${this.isbn}"`,
        "author": `"${this.author}"`,
        "publisher": `"${this.publisher}"`,
        "synopsis": `"${this.synopsis}"`
    }
  }
}

export default Book;
