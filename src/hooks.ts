import { useState, useCallback, useEffect } from 'react'
import { getCharacters } from './handlers'
import { debounce } from './utils'

export const useSearchCharacters = (value: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [characters, setCharacters] = useState<Record<string, unknown>[]>([])

  const handleOnChange = async (search: string): Promise<void> => {
    if (!search) {
      return setCharacters([])
    }
    setIsLoading(true)
    const result = await getCharacters(search)
    setIsLoading(false)
    setCharacters(result.results as Record<string, unknown>[])
  }

  const withDebounce = useCallback(debounce(handleOnChange, 300), [])

  useEffect(() => {
    withDebounce(value)
  }, [value])

  const isNothingFound = !isLoading && !characters.length && !!value.length

  return {
    isLoading,
    characters,
    isNothingFound,
  }
}
