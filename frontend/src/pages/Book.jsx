import { api } from "@/axios/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Book = ({ title, author, publishDate }) => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    (async () => {
      try {
        const result = await api.get(`/books/${id}`);
        console.log(result);
        if (result) {
          setBook(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      <h1 className="text-2xl">{book.title}</h1>
      <div className="flex py-2 items-center gap-2">
        <p>{book.author}</p>.<span>{book.publishData}</span>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        minima, labore provident dolor ipsum ipsam, nam similique officiis a
        architecto reprehenderit magnam possimus saepe tempore dicta dignissimos
        illo distinctio nihil at nulla. Impedit vel quia, pariatur sed ab
        similique porro placeat nihil laborum quasi dolores illo accusantium
        ipsa at voluptates suscipit reiciendis assumenda praesentium labore,
        sint maxime vero eaque consequuntur libero. Vel hic quia minima eos
        officiis. Sunt vero ratione nulla distinctio totam recusandae culpa?
        Ullam voluptas accusamus aliquam labore incidunt esse asperiores,
        architecto blanditiis amet. Repellendus recusandae sit magni, autem
        dolores eaque! Maiores alias sequi dolor consequuntur reprehenderit
        quaerat.
      </div>
    </div>
  );
};

export default Book;
