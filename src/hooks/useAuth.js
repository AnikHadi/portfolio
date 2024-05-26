export default function useAuth() {
  const auth = { email: "Hadiuzzamananik@gmail.com" };

  if (auth?.email) {
    return auth;
  } else {
    return false;
  }
}
