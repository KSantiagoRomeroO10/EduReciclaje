
const CreateUserService = (userData) => {
  const { user, names, lastnames, email, number_phone, password, date_birth, location, rol } = userData
  
  const fields = [user, names, lastnames, email, number_phone, password, date_birth, location, rol]
  const types = ['string', 'string', 'string', 'string', 'number', 'string', 'string', 'string', 'string']
  
  const isValid = fields.every((field, index) => typeof field === types[index])

  if (isValid) {
    const newUser = {
      user,
      names,
      lastnames,
      email,
      number_phone,
      password,
      date_birth,
      location,
      rol,
    }
    return newUser
  }
  else{
    return null
  }

}

module.exports = { CreateUserService }
