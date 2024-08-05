import axios from 'axios'
import headers from './Config/headers'

const CreateAssistants = async () => {

  try {
    const response = await axios.post('https://api.openai.com/v1/assistants', 
      {
        model: 'gpt-4o',
        name: 'EduReciclaje',
        description: 'Modelo GPT-4o con el objetivo de satisfacer preguntas y conversaciones de la plataforma',
        instructions: 'Todas las conversaciones irán orientadas a la educación sobre el reciclaje y el desecho de desperdicios de ciertos materiales perjudiciales para el medio ambiente con conciencia. No hables de otro tema, dí que no estás en el contexto de hacerlo.',
        response_format: { "type": "json_object" }
      }, 
      { headers: headers }
    )
    return response.data.id
  } 
  catch (error) {
    return error.message
  }
}

export default CreateAssistants