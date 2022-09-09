import { Route, Router } from 'wouter'
import Footer from 'components/Footer'
import Landing from 'pages/Landing'
import Logo from 'icons/Logo'
import Navbar from 'components/navbar/Navbar'
import Privacy from 'pages/Privacy'
import Terms from 'pages/Terms'
import classnames, { margin, width } from 'classnames/tailwind'

const bodyContainer = classnames(
  width('md:w-body'),
  margin('md:mx-auto', 'mx-4', 'mb-auto')
)

export default function () {
  return (
    <Router>
      <Navbar
        logo={<Logo />}
        account={undefined}
        needNetworkChange={false}
        logoText="SealCaster"
      />
      <div className={bodyContainer}>
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
      </div>
      <Footer />
    </Router>
  )
}
