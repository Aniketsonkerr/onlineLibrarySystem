import { useState, useEffect } from "react";

function useStatus() {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  });

  return onlineStatus;
}

export default useStatus;
