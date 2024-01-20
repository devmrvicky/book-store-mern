import { api } from "@/axios/api";
import { BookForm } from "@/components";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const UpdateBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const form = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const result = await api.put(`/books/${id}`, data);
      // console.log(result);
      if (result) {
        navigate(`/books/${id}`);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const result = await api.get(`/books/${id}`);
        // console.log(result);
        if (result) {
          const { title, author, publishDate } = result.data;
          form.reset({
            title: title,
            author: author,
            publishDate: publishDate,
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <BookForm form={form} onSubmit={onSubmit} loading={loading} />;
};

export default UpdateBook;
