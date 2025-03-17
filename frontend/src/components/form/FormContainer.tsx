"use client";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { actionFunction } from "@/utils/types";

function FormContainer({
  children,
  action,
  initialState = {},
}: {
  children: React.ReactNode;
  action: actionFunction;
  initialState?: any;
}) {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await action(initialState, formData);
      setMessage(response.message || "Success");
    } catch (error) {
      setMessage("An error occurred");
      console.error(error);
    }
  };

  useEffect(() => {
    if (message) {
      toast({ description: message });
    }
  }, [message, toast]);

  return <form onSubmit={handleSubmit}>{children}</form>;
}

export default FormContainer;
