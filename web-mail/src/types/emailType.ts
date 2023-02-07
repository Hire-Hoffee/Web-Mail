type UserType = {
  name: string;
  surname: string;
  email: string;
  avatar?: string;
};

type EmailType = {
  author: UserType;
  to: UserType[];
  title: string;
  text: string;
  bookmark: boolean;
  important: boolean;
  read: boolean;
  folder: string;
  date: string;
  flag: string;
  doc?: { img: string; size: string }[];
};

export default EmailType;
