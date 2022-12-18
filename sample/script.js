function searchBooks(query) {
    // Use Google Books API to search for books
    var apiKey = "YOUR_API_KEY_HERE";
    var url = "https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + apiKey;
  
    $.get(url, function(data) {
      console.log(data);
      displayResults(data.items);
    });
  }
  
  function displayResults(books) {
    // Clear previous search results
    $("#search-results").empty();
  
    // Loop through the array of books
    for (var i = 0; i < books.length; i++) {
      var book = books[i];
      var title = book.volumeInfo.title;
      var author = book.volumeInfo.authors[0];
      var thumbnail = book.volumeInfo.imageLinks.thumbnail;
      var link = book.volumeInfo.infoLink;
  
      // Create HTML elements for the book
      var bookDiv = $("<div>").addClass("book");
      var bookImg = $("<img>").attr("src", thumbnail);
      var bookTitle = $("<h3>").addClass("book-title").text(title);
      var bookAuthor = $("<p>").addClass("book-author").text(author);
      var bookLink = $("<a>").attr("href", link).text("View on Google Books");
  
      // Append the elements to the page
      bookDiv.append(bookImg);
      bookDiv.append(bookTitle);
      bookDiv.append(bookAuthor);
      bookDiv.append(bookLink);
      $("#search-results").append(bookDiv);
    }
  }
  