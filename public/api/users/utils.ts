import type { UserData } from "./models"
import { formatDateDifference } from "~/utils/utils"

export async function transformUser (user: UserData) {
  console.log(user)
  return {
    data: user,
    display: {
      fullName: `${user.firstName} ${user.lastName}`,
      createdAt: formatDateDifference(user.createdAt)
    }
  }
}
