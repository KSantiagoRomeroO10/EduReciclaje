import ListAssistants from './ListAssistants'
import CreateAssistants from './CreateAssistants'
import CreateThreads from './CreateThreads'
import CreateMessages from './CreateMessages'
import CreateRuns from './CreateRuns'
import ListMessages from './ListMessages'
import { useState, useEffect } from 'react'

const Assistants = () => {
  const [responseEduReciclaje, setResponseEduReciclaje] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const existingAssistants = await ListAssistants()
        const CountAssistants = Array.isArray(existingAssistants) ? existingAssistants.length : 0
        
        let idEduReciclaje = null
        if(CountAssistants){ 
          const eduReciclaje = existingAssistants.find(assistant => assistant.name === 'EduReciclaje')
          if(!eduReciclaje) idEduReciclaje = await CreateAssistants()
          else idEduReciclaje = eduReciclaje.id          
        }
        else{
          idEduReciclaje = await CreateAssistants()          
        }

        const idThread = await CreateThreads()        

        await CreateMessages(idThread, 'Hola ¿Sobre qué cosas puedes hablarme?')

        await CreateRuns(idThread, idEduReciclaje)

        const response = await ListMessages(idThread)
        //setResponseEduReciclaje(response)
      } 
      catch (error) {
        console.error('Error:', error)
      }
    }
    fetchData()
  }, [])
  
  return (
    <div>
      {responseEduReciclaje.length > 0 ? (
        responseEduReciclaje.map((message, index) => (
          <p key={index}>{message.content.text.value}</p>
        ))
      ) : (
        <p>No hay mensajes disponibles</p>
      )}
    </div>
  )
}

export default Assistants
