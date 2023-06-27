import '@styles/globals.css'
import { Kumbh_Sans } from 'next/font/google'
import Nav from '@components/Nav'
import { Providers } from '@redux/provider'

export const metadata = {
  title: 'DevJobs',
  description: 'Find your dream job in IT',
}

const kumbh = Kumbh_Sans({ subsets: ['latin'] })

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-veryLightGray">
        <Providers>
          <main className={kumbh.className}>
            <Nav />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
