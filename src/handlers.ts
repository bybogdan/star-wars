export const getCharacters = async (search: string) => {
  try {
    const data = await fetch(`https://swapi.dev/api/people?search=${search}`)
    const json = (await data.json()) as Record<string, unknown>
    return json
  } catch (error) {
    console.log(error)
    return { results: [] }
  }
}
