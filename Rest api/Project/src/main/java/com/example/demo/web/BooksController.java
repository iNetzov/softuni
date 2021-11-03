package com.example.demo.web;

import com.example.demo.model.dto.BookDTO;
import com.example.demo.service.BooksService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BooksController {
    private final BooksService booksService;

    public BooksController(BooksService booksService) {
        this.booksService = booksService;
    }

    //localhost:8080/books
    //this will connect on localhost:8080/books and will return Json file
    @GetMapping
    public ResponseEntity<List<BookDTO>> getAllBooks(){
       List<BookDTO> allBooks =  booksService.getAllBooks();
       return ResponseEntity
               .ok(allBooks);
    }


}
