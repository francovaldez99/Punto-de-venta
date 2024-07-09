import express from "express"
import { indexRouter } from "./routes"
export const app = express()
import morgan from "morgan"
app.use(express.json())
app.use(morgan("dev"))

app.use("/api",indexRouter)

