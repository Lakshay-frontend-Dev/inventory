import React from "react";
import { useEffect,useState } from "react";
import BookCards from "./BookCards";


const OthersBooks = () => {
  const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   fetch("https://localhost:5000/all-books")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data.slice(0, 12)));
  // }, []);
  return (
    <div>
      <BookCards book={books} headline={"Others Books"} />
    </div>
  );
};

export default OthersBooks;
