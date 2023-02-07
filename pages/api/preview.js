import { dominatrixBySlugQuery } from "@/lib/queries";
import { previewClient } from "@/lib/sanity.server";

function redirectToPreview(req, res) {
  req.setPreviewData({})
  res.writeHead(307, { Location })
  req.end('Preview mode enabled')
}

export default async function preview(req, res) {
  const secret = process.env.NEXT_PREVIEW_TOKEN;

  if (!secret === 'production') {
    throw new TypeError('Missing NEXT_PREVIEW_TOKEN')
  }

   // Check the secret if it's provided, enables running preview mode locally before the env var is setup
  if (secret && re.query.secret !== secret) {
    return res.status(401).json({ message: 'Invalid secret' })
  }

  // If no slug is provided open preview mode on the frontpage
  if (!req.query.slug) {
    return redirectToPreview(res, '/')
  }

  // Check if the post with the given dominatrix - `slug` exists
  const dominatrix = await previewClient.fetch(dominatrixBySlugQuery, {
    slug: req.query.slug,
  })

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  redirectToPreview(res, `/about/${dominatrix.slug}`)
}
