// Initialize Firebase
const auth = firebase.auth();

// Exported functions
export function signup(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
} 