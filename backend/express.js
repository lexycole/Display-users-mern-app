import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()


// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())

app.use('/frontend', express.static(path.join(CURRENT_WORKING_DIR, 'frontend')))

// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)

// Serve Statis asset in production
if (process.env.NODE_ENV === "production") {
	// Set Static folder
	app.use(express.static("frontend/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
	});
}

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }
})

export default app
