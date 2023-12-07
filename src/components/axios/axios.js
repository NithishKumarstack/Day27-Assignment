import axios from 'axios';
const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getdata = async() => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response;   
};

export const getId = async(id) => {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response;
;}

export const addId = async(payload) =>{
    const response = await axios.post(`${BASE_URL}/users`, payload);
    return response;
};

export const updateId = async(id, payload) => {
    const response = await axios.put(`${BASE_URL}/users/${id}`, payload);
    return response;
};

export const deleteId = async(id) => {
    const response = await axios.delete(`${BASE_URL}/users/${id}`);
    return response;
};