const slugQuery = `*[_type == "dominatrix" && slug.current == $slug]{
  _id,
  name,
  slug,
  bio,
  photo,
  url
}`;

const slugPathQuery = `*[_type == "dominatrix" && defined(slug.current)][].slug.current`;

const indexQuery = `*[_type == "home"]`

const aboutQuery = `*[_type == "about"]{
  _id,
  name,
  photo,
  slug
}`
