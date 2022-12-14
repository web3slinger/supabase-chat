import '../styles/globals.css'
import { WagmiConfig, createClient, chain } from 'wagmi'
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from 'connectkit'
import { Toaster } from 'react-hot-toast'

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID
const chains = [chain.mainnet]
const client = createClient(
  getDefaultClient({
    appName: 'Supabase Chat',
    alchemyId,
    chains,
  })
)

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="soft">
        <Component {...pageProps} />
        <Toaster />
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
