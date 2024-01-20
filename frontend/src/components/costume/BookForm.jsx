import React from "react";
import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { FormFieldCostume } from "..";

const BookForm = ({ form, onSubmit, loading }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormFieldCostume
          control={form.control}
          name="title"
          label="Book title"
          placeholder="book title"
          description="this should be your book title"
        />
        <FormFieldCostume
          control={form.control}
          name="author"
          label="Author"
          placeholder="author name"
          description="this is author of book."
        />
        <FormFieldCostume
          control={form.control}
          name="publishData"
          label="Publish date"
          type="date"
          placeholder="Publish date"
          description="this is publish date of this book."
        />

        <Button type="submit">{loading ? "creating..." : "create"}</Button>
      </form>
    </Form>
  );
};

export default BookForm;
