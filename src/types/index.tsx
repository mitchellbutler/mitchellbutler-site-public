import { FluidObject } from 'gatsby-image'

export interface FeedMediumSourceNode {
  id: string
  link: string
  content: {
    encoded: string
  }
  pubDate: string
  title: string
}

export interface InstagramSourceNode {
  id: string
  caption: string
  timestamp: number
  localFile: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

export interface DribbbleSourceNode {
  id: string
  url: string
  title: string
  description: string
  cover: string
  localCover: {
    childImageSharp?: {
      fluid: FluidObject
    }
  }
  published: string
}

export enum FeedItemType {
  Medium = 'MEDIUM',
  Instagram = 'INSTAGRAM',
  Dribbble = 'DRIBBBLE',
}

export interface MediumFeedItem {
  type: FeedItemType.Medium
  id: string
  date: Date
  title: string
  url: string
  encodedContent: string
}

export interface InstagramFeedItem {
  type: FeedItemType.Instagram
  id: string
  date: Date
  image: FluidObject
  caption: string
}

export interface DribbbleFeedItem {
  type: FeedItemType.Dribbble
  id: string
  date: Date
  url: string
  title: string
  localImage?: FluidObject
  remoteMedia: string
  caption: string
}

export type FeedItem = MediumFeedItem | InstagramFeedItem | DribbbleFeedItem
