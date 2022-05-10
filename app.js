const http = require('http')
const fs = require('fs')
const url = require('url')
const pokeImgName = require('./getdata')

const port = 8080

http
	.createServer((req, res) => {
		const urlParse = url.parse(req.url, true)
		if (urlParse.pathname === '/') {
			res.writeHead(200, { 'Content-Type': 'text/html' })
			fs.readFile('index.html', 'utf8', (err, html) => {
				if (err) res.end('html file not found')
				else res.end(html)
			})
		}
		if (req.url == '/pokemones') {
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.write(JSON.stringify(pokeImgName))
			res.end()
		}
	})
	.listen(port, () => {
		console.log(`server running on http://localhost:${port}`)
	})
