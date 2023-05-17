import axios from 'axios'
import type { Movie } from 'components/movies/movie/types'

const serverUrl = 'http://localhost:8000'

export const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await axios.get(`${serverUrl}/movies`)
    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch movies, the server return with the status of ${response.status}`
      )
    }
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch movies')
  }
}
