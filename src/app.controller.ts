import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books')
export class BooksController {
  constructor(private readonly BooksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.BooksService.getAllBooks();
  }

  @Get('getById/:id')
  getBookById(@Param('id') id: String): Book | undefined {
    const bookID = +id;
    return this.BooksService.findById(bookID);
  }

  @Post()
  addBook(@Body() book: Partial<Book>): Book | undefined {
    const bookData = book;

    if (!book.author || !book.publicationYear || book.title) return undefined;
    return this.BooksService.create(bookData);
  }

  @Put(':id')
  updateBook(
    @Param('id') id: String,
    @Body() book: Partial<Book>,
  ): Book | undefined {
    return this.BooksService.update(+id, book);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: String): Book[] {
    return this.BooksService.delete(+id);
  }
}
