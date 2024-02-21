import axiosInstance from '../axiosInstance';

const listInvoices = async () => {
  try {
    const response = await axiosInstance.get('/invoices');

    return response;
  } catch (error) {
    throw error;
  }
};

export { listInvoices };
