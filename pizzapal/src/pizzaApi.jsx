import axios from 'axios';

const pizzaApi = axios.create({
  baseURL: 'https://api.example.com/', // Replace with your pizza API base URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY', // Replace with your actual API key
  },
});

export const getPizzaData = async () => {
  try {
    const response = await pizzaApi.get('/pizzas'); // Adjust the endpoint based on the API documentation
    return response.data;
  } catch (error) {
    console.error('Error fetching pizza data:', error);
    throw error;
  }
};
