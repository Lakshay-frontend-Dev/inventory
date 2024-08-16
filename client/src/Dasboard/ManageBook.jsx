import React, { useState } from "react";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ManageBook.css";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const ManageBook = () => {
  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   fetch("https://localhost:5000/all-books")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data.slice(0,8)));
  // }, []);
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "Book One",
      author: "Author A",
      category: "Fiction",
      price: "$10",
    },
    {
      id: 2,
      name: "Book Two",
      author: "Author B",
      category: "Non-Fiction",
      price: "$15",
    },
    {
      id: 3,
      name: "Book Three",
      author: "Author C",
      category: "Sci-Fi",
      price: "$12",
    },
    // Add more books as needed
  ]);

  const handleDelete = (id) => {
    console.log(id);

    fetch(`https://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
        .then((res) => res.json())
      .then((data) => {
        toast.error("Book deleted successfully!"),
          setBooks(data);
        });
  }

  return (
    <Container
      fluid
      className="m-2 p-3"
      style={{
        boxShadow: "2px 2px 5px grey",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Row className="mb-4">
          <Col>
            <h2 className="text-3xl font-bold">Manage Your Book</h2>
          </Col>
        </Row>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Table hover responsive className="book-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>BOOKNAME</th>
              <th>AUTHORNAME</th>
              <th>CATEGORY</th>
              <th>PRICES</th>
              <th>EDIT OR MANAGE</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.price}</td>
                <td className="flex justify-center gap-2">
                  <Button
                    variant="primary"
                    className="edit-button w-[25%] hover:bg-blue-950"
                  >
                    <Link
                      to={`/admin/dashboard/edit-book/${book.id}`}
                      className="flex items-center gap-2"
                    >
                      <AiFillEdit />
                      <span> Edit</span>
                    </Link>
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(book.id)}
                    className="edit-button w-[25%] hover:bg-red-950 flex items-center gap-2"
                  >
                    <AiFillDelete />
                    <span>Delete</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </motion.div>

      <ToastContainer />
    </Container>
  );
};

export default ManageBook;
