const components = {
    CHAT: 'Chat',
    REGISTER: 'Register',
    LOGIN: 'Login'    
}
  
export default (state = 'CHAT', action = {}) => components[action.type] || state