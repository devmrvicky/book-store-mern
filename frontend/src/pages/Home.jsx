import { BookDeleteBtn, TableTopHead } from "@/components";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronRightIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { AiTwotoneDelete } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { api } from "@/axios/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await api.get("/books");
        setBooks(res.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <TableTopHead />
      <Table className="border">
        <TableCaption>A list of popular books.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S. no</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Publish date</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell>Loading...</TableCell>
              <TableCell>Loading...</TableCell>
              <TableCell>Loading...</TableCell>
              <TableCell>Loading...</TableCell>
              <TableCell>Loading...</TableCell>
            </TableRow>
          ) : (
            books.map(({ _id, title, author, publishData }, index) => (
              <TableRow key={_id}>
                <TableCell className="font-medium">{index + 1}.</TableCell>
                <TableCell>
                  <Link to={`/books/${_id}`}>{title}</Link>
                </TableCell>
                <TableCell>{author}</TableCell>
                <TableCell>{publishData}</TableCell>
                <TableCell className="flex items-center justify-evenly ">
                  <Button
                    variant="link"
                    size="icon"
                    onClick={() => navigate(`/book/update/${_id}`)}
                  >
                    <Pencil1Icon className="h-4 w-4" />
                  </Button>
                  {/* <Button variant="danger" size="icon">
                    <AiTwotoneDelete className="h-4 w-4" />
                  </Button> */}
                  <BookDeleteBtn bookId={_id} />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default Home;
