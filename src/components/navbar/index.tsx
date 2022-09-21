import { Suspense } from 'preact/compat'
import Navbar from 'components/navbar/Navbar'
import useAccount from 'hooks/useAccount'

function NavBarSuspended() {
  const { account } = useAccount()

  return (
    <Navbar account={account} needNetworkChange={false} logoText="Sealcaster" />
  )
}

export default function () {
  return (
    <Suspense
      fallback={<Navbar needNetworkChange={false} logoText="Sealcaster" />}
    >
      <NavBarSuspended />
    </Suspense>
  )
}
