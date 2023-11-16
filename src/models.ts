import { MouseEventHandler, ReactNode } from "react";

export interface ReviewInterface {
  reviewData: ReviewDataProps;
}

export interface ReviewDataProps {
  id?: string;
  title?: string;
  name?: string;
  date?: string;
  comment?: string;
}

export interface FormDataProps {
  id: string;
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
  subscribe: boolean;
}

export interface ContactFormProps {
  addContactHandler: (contact: FormDataProps) => void;
}

export interface ButtonProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}
