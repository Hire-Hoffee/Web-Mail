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
  doc?: { img: string };
};

export default {
  async getEmails(path: string): Promise<EmailType[]> {
    try {
      return (await instance.get(path)).data;
    } catch (error) {
      throw error;
    }
  },
};
