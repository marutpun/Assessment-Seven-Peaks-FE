const axios = require('axios');
const apiUri = `https://content.guardianapis.com/search?api-key=`;
const apiKey = Netlify.env.get('VITE_GUARDIAN_API_KEY');

// Do not export default !!!
export async function handler(event, context) {
  try {
    const { data } = await axios.get(`${apiUri}${apiKey}`);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 401,
      body: JSON.stringify(error),
    };
  }
}
