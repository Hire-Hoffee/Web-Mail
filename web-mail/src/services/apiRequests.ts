import instance from ".";
import EmailType from "@/types/emailType";

export const getEmails = async (path: string): Promise<EmailType[]> => {
  try {
    return (await instance.get(path)).data;
  } catch (error) {
    throw error;
  }
};

export const getOneMail = async (path: string): Promise<EmailType> => {
  try {
    return (await instance.get(path)).data;
  } catch (error) {
    throw error;
  }
};
