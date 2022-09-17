const getText = async () => {
  try {
    const res = await fetch(`http://metaphorpsum.com/paragraphs/20/4`)
    const data = await res.text()

    return data
  } catch (err) {
    throw new Error(`Failed to fetch text\n\n${err}`)
  }
}

export default getText
