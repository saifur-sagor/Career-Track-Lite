import axios from 'axios';

export const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  // ImgBB API key 
  const apiKey = 'd07f8b4b68b36dc32b0f96227293603c'; 
  const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

  const res = await axios.post(url, formData);
  return res.data.data.url; // Return the URL of the uploaded image
};