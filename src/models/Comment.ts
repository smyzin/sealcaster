export default interface Comment {
  id: number
  timestamp: number
  replier: string
  repliedTo: string
  content: string
  isThreadOwned?: boolean
  replies?: Comment[]
}
