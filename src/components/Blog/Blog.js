import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hook/useTitle";
import "./Blog.css";

const Blog = () => {
   useTitle('Blog')

   return (
      <div className="blog-section">
         <h1>Question and Answer:-</h1>
         <div className="question">
            <h3>1. Difference between SQL and NoSQL.</h3>
            <div>
               <p>
                  SQL is the programming language used to interface with
                  relational databases. (Relational databases model data as
                  records in rows and tables with logical links between them).
                  NoSQL is a class of DBMs that are non-relational and generally
                  do not use SQL.
               </p>
            </div>
         </div>
         <div className="question">
            <h3>2. What is JWT, and how does it work?</h3>
            <div>
               <p>
                  JSON Web Token is a proposed Internet standard for creating
                  data with optional signature and/or optional encryption whose
                  payload holds JSON that asserts some number of claims. The
                  tokens are signed either using a private secret or a
                  public/private key.
               </p>
               <br />
               <p>
                  jwts differ from other web tokens in that they contain a set
                  of claims. Claims are used to transmit information between two
                  parties. What these claims are depends on the use case at
                  hand. For example, a claim may assert who issued the token,
                  how long it is valid for, or what permissions the client has
                  been granted.
               </p>
            </div>
         </div>
         <div className="question">
            <h3>3. What is the difference between javascript and NodeJS?</h3>
            <div>
               <p>
                  JavaScript is a simple programming language that can be used
                  with any browser that has the JavaScript Engine installed.
                  Node. js, on the other hand, is an interpreter or execution
                  environment for the JavaScript programming language.
               </p>
            </div>
         </div>
         <div className="question">
            <h3>
               4. How does NodeJS handle multiple requests at the same time?
            </h3>
            <div>
               <p>
                  NodeJS receives
                  multiple client requests and places them into EventQueue.
                  NodeJS is built with the concept of event-driven architecture.
                  NodeJS has its own EventLoop which is an infinite loop that
                  receives requests and processes them.
               </p>
               <br />
            </div>
         </div>
      </div>
   );
};

export default Blog;
