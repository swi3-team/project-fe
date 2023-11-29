import { useState } from "react"
import axios from "axios"
import { Car } from "../../types"
import { API_URL } from "../constants"

export const useCreateCar = (newCar: Car) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [error, setError] = useState<Error>()

  const createCar = async () => {
    setIsSubmitting(true)
    try {
      await axios.post(`${API_URL}/cars/add`, newCar)
    } catch (error: unknown) {
      setError(error as Error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { isSubmitting, error, createCar }
}
