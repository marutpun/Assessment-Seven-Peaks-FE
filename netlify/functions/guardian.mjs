import axios from 'axios';
const apiEndpoint = `https://content.guardianapis.com/search?api-key=`;
const apiKey = Netlify.env.get('VITE_GUARDIAN_API_KEY');

// Do not export default !!!
// Lambda Compatible (old)
//
// const apiKeyLambda = process.env.VITE_GUARDIAN_API_KEY;
// export async function handler(event, context) {
//   try {
//     const { data } = await axios.get(`${apiEndpoint}${apiKey}`);
//     return {
//       statusCode: 200,
//       body: JSON.stringify(data),
//     };
//   } catch (error) {
//     return {
//       statusCode: 401,
//       body: JSON.stringify(error),
//     };
//   }
// }

// Netlify Function v2.0 (new)
// https://answers.netlify.com/t/netlify-global-in-functions-v2/104887/14
export default async (request, context) => {
  try {
    const response = await axios.get(`${apiEndpoint}${apiKey}`);
    return Response.json(response.data);
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Failed fetching data' }, { status: 500 });
  }
};
