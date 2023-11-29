import { useState } from "react"
import axios from "axios"
import { API_URL } from "../constants"

export const useDeleteCar = (id: string) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [error, setError] = useState<Error>()

  const deleteCar = async () => {
    setIsDeleting(true)
    try {
      await axios.delete(`${API_URL}/cars/delete/${id}`)
    } catch (error: unknown) {
      setError(error as Error)
    } finally {
      setIsDeleting(false)
    }
  }

  return { isDeleting, error, deleteCar }
}
