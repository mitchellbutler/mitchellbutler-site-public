# [mitchellbutler.com](https://mitchellbutler.com)

This is a public copy of the code that I use to deploy my [personal website](https://mitchellbutler.com). The site is built on Gatsby, and uses plugins to aggregate data from my social media profiles.

I'm publishing it here because I think it serves as a good example for some of the techniques I've used in Gatsby:

* Building a typed (TypeScript) [feed with a union type](https://github.com/mitchellbutler/mitchellbutler-site-public/blob/master/src/types/index.tsx#L72).
* Pre-rendering pagination [during deployment](https://github.com/mitchellbutler/mitchellbutler-site-public/blob/master/gatsby-node.js#L73).
* [Using plugins](https://github.com/mitchellbutler/mitchellbutler-site-public/blob/master/gatsby-config.js#L13) to aggregate a feed.
* Taking advantage of Gatsby's [Image pipeline](https://github.com/mitchellbutler/mitchellbutler-site-public/blob/master/src/components/Feed/InstagramPhoto/index.tsx#L67).

I hope you'll find this useful as a reference. If you're building something similar then let me know, I'd love to hear about it!
