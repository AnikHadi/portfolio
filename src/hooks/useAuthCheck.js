import { useEffect, useState } from "react";

export default function useAuthCheck() {
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);
    }
    setAuthChecked(true);
  }, [setAuthChecked]);

  return authChecked;
}
