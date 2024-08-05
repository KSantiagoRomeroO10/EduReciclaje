import axios from 'axios'
import headers from './Config/headers'

const ListAssistants = async () => {

  try {
    const response = await axios.get('https://api.openai.com/v1/assistants', 
      {
      headers: headers,
      params: {
        order: 'desc',
        limit: 20
      }
    })
    return response.data.data
  } 
  catch (error) {
    return error.message
  }
}
export default ListAssistants