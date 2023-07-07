import { useState } from 'react'
import { useSearchCharacters } from './hooks'
import './App.css'

function App() {
  const [search, setSearch] = useState<string>('')

  const { isLoading, characters, isNothingFound } = useSearchCharacters(search)

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-4xl font-bold underline">Star wars playground</h1>
      <input
        value={search}
        type="text"
        onChange={(e) => {
          const value = e.target.value
          setSearch(value)
        }}
        placeholder={`Find the person you're looking for!`}
        className="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700"
      />

      {isLoading && <div>Loading...</div>}

      {isNothingFound && <div>No results found</div>}

      {!isLoading &&
        characters.map((character) => (
          <div key={character.name as string}>{character.name as string}</div>
        ))}
    </div>
  )
}

export default App
