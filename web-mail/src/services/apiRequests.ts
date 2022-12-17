import instance from ".";

type UserType = {
  name: string;
  surname: string;
  email: string;
  avatar?: string;
};

export type EmailType = {
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
  doc?: { img: string };
};

export const getEmails = async (path: string): Promise<EmailType[]> => {
  try {
    return (await instance.get(path)).data;
  } catch (error) {
    throw error;
  }
};

export const getOneMail = async (path: string): Promise<[EmailType]> => {
  try {
    return (await instance.get(path)).data;
  } catch (error) {
    throw error;
  }
};
