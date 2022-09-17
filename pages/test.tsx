import getText from "../adapters/getText"

export const getStaticProps = async () => {
  const data = await getText()

  return {
    props: { result: data },
  }
}

const Test = ({ result }: { result: string }) => {
  return (
    <div>
      <p>{result}</p>
    </div>
  )
}

export default Test
