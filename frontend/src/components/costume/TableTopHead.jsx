import React from "react";
import { Button } from "../ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
const TableTopHead = () => {
  const navigate = useNavigate();
  return (
    <div className="my-2">
      <Button
        variant="link"
        className="border"
        onClick={() => navigate("/create")}
      >
        <Pencil1Icon className="mr-2" /> Create new book
      </Button>
    </div>
  );
};

export default TableTopHead;
