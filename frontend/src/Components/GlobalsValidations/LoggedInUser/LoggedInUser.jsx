import UseUserStore from '../../../Stores/UseUserStore'

const LoggedInUser = () => {
  const user = UseUserStore((state) => state.user)
  return Object.values(user).every(Boolean)
}

export default LoggedInUser
