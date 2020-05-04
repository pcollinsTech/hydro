// import modular routes
import webRoutes from "../modules/web/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/user/routes"
import activityRoutes from "../modules/activity/routes"

export default [...webRoutes, ...authRoutes, ...userRoutes, ...activityRoutes]
