import axios from 'axios'
import headers from './Config/headers'

const CreateThreads = async () => {
  try {
    const response = await axios.post('https://api.openai.com/v1/threads', 
      {}, 
      { headers: headers }
    )
    return response.data.id
  } 
  catch (error) {
    return error.message
  }
}

export default CreateThreads
