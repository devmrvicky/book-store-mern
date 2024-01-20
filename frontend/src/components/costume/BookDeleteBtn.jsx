import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AiTwotoneDelete } from "react-icons/ai";
import { api } from "@/axios/api";
import { useNavigate } from "react-router-dom";

const BookDeleteBtn = ({ bookId }) => {
  const navigate = useNavigate();
  const handleDeleteBook = async () => {
    try {
      const res = await api.delete(`/books/${bookId}`);
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <AiTwotoneDelete className="h-4 w-4" />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this book
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteBook}>
            delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BookDeleteBtn;
