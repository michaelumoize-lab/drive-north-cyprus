// data/contact.ts
export interface ContactConfig {
  email: string;
  address: {
    tr: string;
    en: string;
  };
}

export const contactConfig: ContactConfig = {
  email: "info@drivenorthcyprus.com",
  address: {
    tr: "Kuzey Kıbrıs Türk Cumhuriyeti",
    en: "Northern Cyprus",
  },
};
