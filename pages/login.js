// import useSWR from "swr";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Login({ name }) {
  //arrgument is { name }
  // const { data, error } = useSWR("api/about", fetcher);

  // if (error) {
  //   return <p>some error during feching</p>;
  // }
  // if (!data) return <p>no data found</p>;

  return (
    <div>
      <h1>My name is: {name}</h1>
    </div>
  );
}

//   export function getServerSideProps() {
//     return {
//       props: { name: "Reed Barger" },
//     };
//   }
export async function getStaticProps() {
  const data = await fetch("https://randomuser.me/api").then((res) =>
    res.json()
  );

  return {
    props: { name: data.results[0].name.first },
  };
}

//we can use useeffect and setstate instead if SWR in this component to fetch data from api both are same and are client side rendering.
// and getServerSideProps is fetching api in server side 
