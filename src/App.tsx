import "./styles.css";
import WebApp from "@twa-dev/sdk";
import { MainButton } from "@twa-dev/sdk/react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MainButton
        text="Push!"
        onClick={() => {
          WebApp.showAlert("Hello!");
        }}
      />
    </div>
  );
}
