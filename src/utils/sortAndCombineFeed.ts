import {
  FeedMediumSourceNode,
  InstagramSourceNode,
  DribbbleSourceNode,
  MediumFeedItem,
  FeedItemType,
  InstagramFeedItem,
  DribbbleFeedItem,
} from '../types'

export const sortAndCombineFeed = ({
  allMediumNodes,
  allInstagramNodes,
  allDribbbleNodes,
}: {
  allMediumNodes: FeedMediumSourceNode[]
  allInstagramNodes: InstagramSourceNode[]
  allDribbbleNodes: DribbbleSourceNode[]
}) => {
  const mediumNodes: MediumFeedItem[] = allMediumNodes.map(
    ({ id, link, content, pubDate, title }) => ({
      type: FeedItemType.Medium as FeedItemType.Medium,
      id,
      title,
      url: link,
      encodedContent: content.encoded,
      date: new Date(pubDate),
    }),
  )
  const instagramNodes: InstagramFeedItem[] = allInstagramNodes.map(
    ({ id, localFile, caption, timestamp }) => ({
      type: FeedItemType.Instagram as FeedItemType.Instagram,
      id,
      image: localFile.childImageSharp.fluid,
      caption,
      date: new Date(timestamp * 1000),
    }),
  )
  const dribbbleNodes: DribbbleFeedItem[] = allDribbbleNodes.map(
    ({ id, url, title, description, cover, localCover, published }) => ({
      type: FeedItemType.Dribbble as FeedItemType.Dribbble,
      id,
      url,
      title,
      localImage:
        localCover.childImageSharp && localCover.childImageSharp.fluid,
      remoteMedia: cover,
      caption: description,
      date: new Date(published),
    }),
  )
  const allNodes = [
    ...mediumNodes,
    ...instagramNodes,
    ...dribbbleNodes,
  ].sort((a, b) => (a.date > b.date ? -1 : 1))
  return allNodes
}
