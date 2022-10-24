import { AccentText } from 'components/ui/Text'
import { Link } from 'wouter'
import { classnames, display, flexDirection, gap } from 'classnames/tailwind'
import { memo } from 'preact/compat'
import BareCard from 'components/BareCard'
import CommentWithReplies from 'components/BlockchainList/CommentWithReplies'
import Replies from 'components/BlockchainList/Replies'
import classNamesToString from 'helpers/classNamesToString'
import truncateMiddleIfNeeded from 'helpers/network/truncateMiddleIfNeeded'
import useMerkleRoot from 'hooks/useMerkleRoot'
import useReplies from 'hooks/useReplies'

const wrapper = classNamesToString(
  classnames(display('flex'), flexDirection('flex-col'), gap('gap-y-3')),
  'empty:hidden'
)

export default memo<{
  threadId: number
  postId: number
  limitThread?: number
  owner: string
  canReply?: boolean
}>(({ threadId, postId, limitThread, owner, canReply }) => {
  const threadMerkleRoot = useMerkleRoot(postId)
  if (!threadMerkleRoot) return null

  const replies = useReplies({
    threadId,
    replyToId: threadMerkleRoot,
  })
  const repliesLength = replies.length

  if (!canReply && repliesLength === 0) return null

  return (
    <div className={wrapper}>
      <Replies
        replyToId={threadMerkleRoot}
        threadId={threadId}
        placeholder={`Reply to ${truncateMiddleIfNeeded(owner, 12)}`}
        canReply={canReply}
      />
      {replies.map(({ castId, postId }, index) =>
        limitThread ? (
          index < limitThread && (
            <CommentWithReplies
              castId={castId}
              postId={postId}
              threadId={threadId}
              canReply={canReply}
              hideReplies
            />
          )
        ) : (
          <CommentWithReplies
            castId={castId}
            postId={postId}
            threadId={threadId}
            canReply={canReply}
          />
        )
      )}
      {limitThread && repliesLength > 3 && (
        <Link to={`/thread/${postId}`}>
          <BareCard smallPaddings>
            <AccentText color="text-accent" small>
              + {repliesLength - limitThread}{' '}
              {repliesLength - limitThread > 1 ? 'replies' : 'reply'}
            </AccentText>
          </BareCard>
        </Link>
      )}
    </div>
  )
})

// export default function ({
//   threadId,
//   postId,
//   limitThread,
//   owner,
//   canReply,
// }: {
//   threadId: number
//   postId: number
//   limitThread?: number
//   owner: string
//   canReply?: boolean
// }) {
//   const props = { threadId, postId, limitThread, owner, canReply }

//   return (
//     <Suspense fallback={<LoadingReplies />}>
//       <ThreadPartSuspended {...props} />
//     </Suspense>
//   )
// }
