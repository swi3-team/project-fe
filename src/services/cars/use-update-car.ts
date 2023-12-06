import { useState } from "react"
import axios from "axios"
import { Car } from "../../types"
import { API_URL } from "../constants"

export const useUpdateCar = (id: string, updatedCarData: Car) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false)
  const [error, setError] = useState<Error>()

  const updateCar = async () => {
    setIsUpdating(true)
    try {
      await axios.put(`${API_URL}/cars/${id}`, updatedCarData)
    } catch (error: unknown) {
      setError(error as Error)
    } finally {
      setIsUpdating(false)
    }
  }

  return { isUpdating, error, updateCar }
}
