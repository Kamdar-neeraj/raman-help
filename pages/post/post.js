// import { useRouter } from 'next/router'

const Post = ({ post }) => {
//   const router = useRouter()

//   if (router.isFallback) {
//     return <div>Loading...</div>
//   }

  return (
    <div>{"...post"}</div>
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params }) {
//   // if url was /posts/3, params.id will be 3
// //   const res = await fetch(`https://.../1`)
//   const post = "<p>await res.json</p>"

//   return { props: { post } }
// }

export default Post