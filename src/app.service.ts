import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }

  findById(bookid: number): Book | undefined {
    return books.find((book) => book.id === bookid);
  }

  create(book: Partial<Book>): Book {
    if (book.author || book.publicationYear || book.title) {
      const newID = books[books.length - 1].id + 1;

      const newBook: Book = {
        id: newID,
        author: book.author ?? '',
        title: book.title ?? '',
        publicationYear: book.publicationYear ?? 0,
      };
      books.push(newBook);
      return newBook;
    }
  }

  update(bookID: number, updatedBookFields: Partial<Book>): Book | undefined {
    const curentBook = books.find((book) => book.id === bookID);
    const updatedBook = {
      id: bookID,
      title: updatedBookFields.title ?? curentBook.title,
      author: updatedBookFields.author ?? curentBook.author,
      publicationYear:
        updatedBookFields.publicationYear ?? curentBook.publicationYear,
    };
    books[bookID - 1] = updatedBook;

    return updatedBook;
  }

  delete(bookId: number): Book[] {
    // books = books.filter((book) => book.id !== bookId)
    books.splice(bookId - 1, 1);
    return books;
  }
}
