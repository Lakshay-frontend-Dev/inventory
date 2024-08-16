import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import {
  FaBook,
  FaUser,
  FaImage,
  FaTag,
  FaFilePdf,
  FaInfoCircle,
} from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  // const {
  //   bookTitle,
  //   authorName,
  //   imageURL,
  //   category,
  //   bookDescription,
  //   bookPDFURL,
  // } = useLoaderData();

   const [bookData, setBookData] = useState({
     title: "",
     author: "",
     imageUrl: "",
     category: "",
     description: "",
     pdfUrl: "",
   });

   const [errors, setErrors] = useState({});

   const categories = [
     { id: 1, name: "Fiction" },
     { id: 2, name: "Non-fiction" },
     { id: 3, name: "Science" },
     { id: 4, name: "Biography" },

   ];

   const validate = () => {
     const newErrors = {};
     if (!bookData.title) newErrors.title = "Book title is required";
     if (!bookData.author) newErrors.author = "Author name is required";
     if (!bookData.imageUrl) newErrors.imageUrl = "Book image URL is required";
     if (!bookData.category) newErrors.category = "Book category is required";
     if (!bookData.description)
       newErrors.description = "Book description is required";
     if (!bookData.pdfUrl) newErrors.pdfUrl = "Book PDF URL is required";
     return newErrors;
   };

   const handleChange = (e) => {
     const { name, value } = e.target;
     setBookData({ ...bookData, [name]: value });

     // Immediate validation on change
     const newErrors = { ...errors };
     if (!value) {
       newErrors[name] = `${
         name.charAt(0).toUpperCase() + name.slice(1)
       } is required`;
     } else {
       delete newErrors[name];
     }
     setErrors(newErrors);
   };

  const handleUpdate = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Book data submitted:", bookData);
      // Reset the form
      setBookData({
        title: "",
        author: "",
        imageUrl: "",
        category: "",
        description: "",
        pdfUrl: "",
      });
      setErrors({});
      console.log(bookData.title);

      const bookTitle = bookData.title;
      const authorName = bookData.author;
      const imageURL = bookData.imageUrl;
      const category = bookData.category;
      const bookDescription = bookData.description;
      const bookPDFURL = bookData.pdfUrl;

      const updateBookObj = {
        bookTitle,
        authorName,
        imageURL,
        category,
        bookDescription,
        bookPDFURL,
      };
      fetch(`http://localhost:5000/book/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateBookObj),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      toast.success("Book updated successfully!");
    } else {
      setErrors(formErrors);
      toast.error("Please fill out all required fields.");
    }
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
             <h2 className="text-3xl font-bold">Update the Book Data</h2>
           </Col>
         </Row>
         <Form onSubmit={handleUpdate}>
           <Row className="mb-3" style={{ lineHeight: "40px" }}>
             <Col md={6}>
               <Form.Group controlId="formBookTitle">
                 <Form.Label className="flex items-center font-semibold">
                   <FaBook className="mr-2" /> <span>Book Title</span>
                 </Form.Label>
                 <Form.Control
                   type="text"
                   name="title"
                   value={bookData.title}
                   onChange={handleChange}
                   isInvalid={!!errors.title}
                   placeholder="Enter Book Title"
                  //  defaultValue={bookTitle}
                 />
                 <Form.Control.Feedback type="invalid">
                   {errors.title}
                 </Form.Control.Feedback>
               </Form.Group>
             </Col>
             <Col md={6}>
               <Form.Group controlId="formAuthorName">
                 <Form.Label className="flex items-center font-semibold">
                   <FaUser className="mr-2" /> <span>Author Name</span>
                 </Form.Label>
                 <Form.Control
                   type="text"
                   name="author"
                   value={bookData.author}
                   onChange={handleChange}
                   isInvalid={!!errors.author}
                   placeholder="Enter Author's Name"
                  //  defaultValue={authorName}
                 />
                 <Form.Control.Feedback type="invalid">
                   {errors.author}
                 </Form.Control.Feedback>
               </Form.Group>
             </Col>
           </Row>
           <Row className="mb-3">
             <Col md={6}>
               <Form.Group controlId="formBookImageUrl">
                 <Form.Label className="flex items-center font-semibold">
                   <FaImage className="mr-2" /> <span>Book Image URL</span>
                 </Form.Label>
                 <Form.Control
                   type="text"
                   name="imageUrl"
                   value={bookData.imageUrl}
                   onChange={handleChange}
                   isInvalid={!!errors.imageUrl}
                   placeholder="Enter Image URL"
                  //  defaultValue={imageURL}
                 />
                 <Form.Control.Feedback type="invalid">
                   {errors.imageUrl}
                 </Form.Control.Feedback>
               </Form.Group>
             </Col>
             <Col md={6}>
               <Form.Group controlId="formBookCategory">
                 <Form.Label className="flex items-center font-semibold">
                   <FaTag className="mr-2" /> <span>Book Category</span>
                 </Form.Label>
                 <Form.Control
                   as="select"
                   name="category"
                   value={bookData.category}
                   onChange={handleChange}
                   isInvalid={!!errors.category}
                   placeholder="Select a category"
                  //  defaultValue={category}
                 >
                   <option value="">Select a category</option>
                   {categories.map((cat) => (
                     <option key={cat.id} value={cat.name}>
                       {cat.name}
                     </option>
                   ))}
                 </Form.Control>
                 <Form.Control.Feedback type="invalid">
                   {errors.category}
                 </Form.Control.Feedback>
               </Form.Group>
             </Col>
           </Row>
           <Row className="mb-3">
             <Col>
               <Form.Group controlId="formBookDescription">
                 <Form.Label className="flex items-center font-semibold">
                   <FaInfoCircle className="mr-2" />{" "}
                   <span>Book Description</span>
                 </Form.Label>
                 <Form.Control
                   as="textarea"
                   rows={3}
                   name="description"
                   value={bookData.description}
                   onChange={handleChange}
                   isInvalid={!!errors.description}
                   placeholder="Enter Book Description"
                  //  defaultValue={bookDescription}
                 />
                 <Form.Control.Feedback type="invalid">
                   {errors.description}
                 </Form.Control.Feedback>
               </Form.Group>
             </Col>
           </Row>
           <Row className="mb-3">
             <Col>
               <Form.Group controlId="formBookPdfUrl">
                 <Form.Label className="flex items-center font-semibold">
                   <FaFilePdf className="mr-2" /> <span>Book PDF URL</span>
                 </Form.Label>
                 <Form.Control
                   type="text"
                   name="pdfUrl"
                   value={bookData.pdfUrl}
                   onChange={handleChange}
                   isInvalid={!!errors.pdfUrl}
                   placeholder="Enter PDF URL"
                  //  defaultValue={bookPDFURL}
                 />
                 <Form.Control.Feedback type="invalid">
                   {errors.pdfUrl}
                 </Form.Control.Feedback>
               </Form.Group>
             </Col>
           </Row>
           <Row className="mt-4">
             <Col>
               <motion.div whileHover={{ scale: 1.05 }}>
                 <Button
                   className="w-full p-2"
                   variant="primary"
                   type="submit"
                 >
                   Update Book
                 </Button>
               </motion.div>
             </Col>
           </Row>
         </Form>
       </motion.div>
       <ToastContainer />
     </Container>
   );
};

export default EditBook;
