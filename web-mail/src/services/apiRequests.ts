import instance from ".";

type User = {
  name: string;
  surname: string;
  email: string;
  avatar?: string;
};

export type Email = {
  author: User;
  to: User[];
  title: string;
  text: string;
  bookmark: boolean;
  important: boolean;
  read: boolean;
  folder: string;
  doc?: { img: string };
};

export default {
  async getEmails(path: string): Promise<Email[]> {
    try {
      return (await instance.get(path)).data;
    } catch (error) {
      throw error;
    }
  },
};
