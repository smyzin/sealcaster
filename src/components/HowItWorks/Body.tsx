import { AccentText, CardParagraph, LinkText } from 'components/ui/Text'
import StepList from 'components/HowItWorks/StepList'

export default function ({ hasWallet }: { hasWallet?: boolean }) {
  if (hasWallet)
    return (
      <>
        <CardParagraph>
          We specialize in zero-knowledge proof. We generated a wallet for you
          (locally) and minted a zk badge of the Farcaster verification onto it.
          Meaning, this wallet proves its owner is a user of Farcaster, but
          won’t say who. Aka, not a snitch.{' '}
        </CardParagraph>
        <CardParagraph>
          If you’re interested in a deep dive, check out this{' '}
          <LinkText underline url="https://blog.bigwhalelabs.com">
            blog article
          </LinkText>{' '}
          that details the complicated stuff that actually isn’t that
          complicated. But it does a damn good job of hiding your identity.
        </CardParagraph>
        <CardParagraph>
          <AccentText color="text-accent">Additionally: </AccentText>You can add
          more zk badges to your burner wallet with{' '}
          <LinkText underline url="https://sealcred.xyz">
            SealCred
          </LinkText>
          .
        </CardParagraph>
        <CardParagraph>
          SealCred is an open-source privacy-preserving social protocol powered
          by zero-knowledge proofs. We allow users to easily create pseudonymous
          identities/wallets and transfer social capital from wallet A to wallet
          B using anonymous but verified, soulbound zkNFTs or zkBadges.
        </CardParagraph>
      </>
    )
  return (
    <>
      <StepList />
      <CardParagraph>
        <AccentText color="text-accent">Bonus: </AccentText>
        Add more zk badges to your burnerwallet with{' '}
        <LinkText underline url="https://sealcred.xyz">
          SealCred
        </LinkText>
        .
      </CardParagraph>
    </>
  )
}
