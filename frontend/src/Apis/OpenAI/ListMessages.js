import axios from 'axios'
import headers from './Config/headers'

const ListMessages = async (threadId) => {

  try {
    const response = await axios.get(`https://api.openai.com/v1/threads/${threadId}/messages`,
      { headers: headers }
    )
    return response.data.data
  } 
  catch (error) {
    return error.message
  }

}

export default ListMessages