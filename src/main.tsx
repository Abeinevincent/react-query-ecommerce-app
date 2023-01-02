import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import App from './App'
import customTheme from './utils/theme/theme'

const queryClient = new QueryClient({})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </QueryClientProvider>
)
