import Component1 from "./Component1";
import Controls from "./Controls";
import PaymentForm from "./PaymentForm";
import useTheme from "./store/hooks/useTheme";

function App() {
  const { theme } = useTheme();
  return (
    <div className="App">
      THEME: {theme}
      <Component1 />
      <Controls />
      <PaymentForm />
    </div>
  );
}

export default App;
