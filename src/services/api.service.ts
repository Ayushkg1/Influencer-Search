// const API_BASE_URL = 'https://mocki.io/v1/85d6ffc7-67f7-4e9e-ab31-b7f14cac7eaa';

export const fetchData = async (url:string = '', options = {}) => {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error:any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};