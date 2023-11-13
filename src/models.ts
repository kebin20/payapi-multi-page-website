export interface ReviewDataProps {
  string: any;
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
  addContact: (contact: FormDataProps) => void;
}
