export const dominatrixQuery = `*[_type == "dominatrix" && slug.current == $slug]{
  _id,
  name,
  "slug": slug.current,
  bio,
  photo,
  url
}`;

export const slugPathQuery = `*[_type == "dominatrix" && defined(slug.current)][].slug.current`;

export const dominatrixBySlugQuery = `*[_type == "dominatrix" && slug.current == $slug][0]{
  ${dominatrixQuery}
}`

export const indexQuery = `*[_type == "home"]`

export const aboutQuery = `*[_type == "about"]{
  _id,
  name,
  photo,
  slug
}`
