// Importamos la función que queremos probar
const { CreateUserService } = require('../Service/UserService')

describe('CreateUserService Function', () => {
  test('Debería crear un usuario cuando se proporcionen datos válidos', () => {
    const validUserData = {
      user: 'johndoe',
      names: 'John',
      lastnames: 'Doe',
      email: 'johndoe@example.com',
      number_phone: 1234567890,
      password: 'securepassword',
      date_birth: '1990-01-01',
      location: 'New York',
      rol: 'admin',
    }

    const result = CreateUserService(validUserData)

    expect(result).toEqual(validUserData)
  })

  test('Debería devolver null cuando se proporcionen datos inválidos', () => {
    const invalidUserData = {
      user: 'johndoe',
      names: 'John',
      lastnames: 'Doe',
      email: 'johndoe@example.com',
      number_phone: 'notanumber', // Este dato es inválido
      password: 'securepassword',
      date_birth: '1990-01-01',
      location: 'New York',
      rol: 'admin',
    }

    const result = CreateUserService(invalidUserData)

    expect(result).toBeNull()
  })

  test('Debería devolver null cuando falte algún campo', () => {
    const incompleteUserData = {
      user: 'johndoe',
      names: 'John',
      lastnames: 'Doe',
      email: 'johndoe@example.com',
      password: 'securepassword',
      date_birth: '1990-01-01',
      location: 'New York',
      rol: 'admin',
    } // Falta el campo "number_phone"

    const result = CreateUserService(incompleteUserData)

    expect(result).toBeNull()
  })
})
