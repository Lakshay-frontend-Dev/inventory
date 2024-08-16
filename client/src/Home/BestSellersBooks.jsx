import React, { useEffect, useState } from "react";
import BookCards from "./BookCards";

const BestSellersBooks = () => {
  const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   fetch("https://localhost:5000/all-books")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data.slice(0,8)));
  // }, []);
  return (
    <div>
      <BookCards book={books} headline={"Best Books Seller"} />
    </div>
  );
};

export default BestSellersBooks;
