import BlockchainList from 'components/BlockchainList'
import CastBlock from 'components/Cast/CastBlock'
import CastHeader from 'components/Cast/CastHeader'
import PostProcessing from 'components/ProcessingCard'
import QuestionOfTheDay from 'components/ui/QuestionOfTheDay'
import classnames, {
  display,
  flexDirection,
  gap,
  margin,
  space,
} from 'classnames/tailwind'
import useScrollToTop from 'hooks/useScrollToTop'

const processingCardWrapper = classnames(
  flexDirection('flex-col'),
  display('flex'),
  gap('gap-y-6', 'sm:gap-y-12')
)

export default function () {
  useScrollToTop()

  return (
    <div className={processingCardWrapper}>
      <QuestionOfTheDay />
      <PostProcessing />
      <div className={space('space-y-6')}>
        <CastHeader />
        <CastBlock threadId={0} replayId={0} />
      </div>
      <div className={margin('mt-20', 'sm:mt-14')}>
        <BlockchainList />
      </div>
    </div>
  )
}
