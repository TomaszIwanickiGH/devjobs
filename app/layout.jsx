import '@styles/globals.css'

export const metadata = {
  title: 'DevJobs',
  description: 'Find your dream job in IT',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
