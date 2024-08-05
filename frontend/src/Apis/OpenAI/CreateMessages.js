import axios from "axios"
import headers from './Config/headers'

const CreateMessages = async (threadId, message) => {

  try {
    const response = await axios.post(`https://api.openai.com/v1/threads/${threadId}/messages`, 
      {
        role: 'user',
        content: message
      },
      { headers: headers }
    )
    return response.id
  } 
  catch (error) {
    return error.message
  }
}

export default CreateMessages
