import axios from 'axios'
import headers from './Config/headers'

const CreateRuns = async (threadId, assistantId) => {
  try {
    const response = await axios.post(`https://api.openai.com/v1/threads/${threadId}/runs`, 
      { 
        assistant_id: assistantId,
        response_format: "auto"
      }, 
      { headers: headers },
    )
    return response
  }
  catch (error) {
    return error.message
  }
}

export default CreateRuns
