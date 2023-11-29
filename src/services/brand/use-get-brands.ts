import axios from "axios"
import { Brand } from "../../types"
import { useEffect, useState } from "react"
import { API_URL } from "../constants"

export const useGetBrands = () => {
  const [data, setData] = useState<Brand[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    const getBrands = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${API_URL}/cars/brands/all`)
        setData(response.data)
      } catch (error: unknown) {
        setError(error as Error)
      } finally {
        setIsLoading(false)
      }
    }

    getBrands()
  }, [])

  return { data, isLoading, error }
}
