import { useEffect, useState } from "react"
import axios from "axios"
import { Owner } from "../../types"
import { API_URL } from "../constants"

export const useGetOwners = () => {
  const [data, setData] = useState<Owner[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    const getOwners = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${API_URL}/cars/owners`)
        console.log("response: ", response)
        setData(response.data)
      } catch (error: unknown) {
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }

    getOwners()
  }, [])

  return { data, isLoading, error }
}
