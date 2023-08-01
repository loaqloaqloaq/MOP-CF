export default {
  isLoggedIn: (state) => {
    try {
      return state.authUser
    } catch {
      return false
    }
  }
}