"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { BookForm, FormFieldCostume } from "@/components";
import { api } from "@/axios/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Create() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      title: "book title 1",
      author: "vikash",
      publishData: "2024-01-20",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      const result = await api.post("/books", values);
      navigate("/");
      console.log(result);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return <BookForm form={form} onSubmit={onSubmit} loading={loading} />;
}
