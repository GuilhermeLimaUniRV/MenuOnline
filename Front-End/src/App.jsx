import { CartProvider } from "./context/CartContext"
import Cardapio from "./Pages/Cardapio"


function App() {
  return (
    <CartProvider>
      <Cardapio />
    </CartProvider>
  )
}

export default App