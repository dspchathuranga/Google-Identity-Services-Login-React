import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  function handleCredentialResponse(responce) {
    console.log(responce);
  }

  useEffect(() => {
    /* global google  */
    google.accounts.id.initialize({
      client_id:
        "YOUR_GOOGLE_CLIENT_ID",
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );
  }, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
