import fs from 'fs'
import path from 'path'
import express from 'express'
import {build, createServer as createViteServer} from 'vite'
import { StaticRouter } from "react-router-dom/server"
import App from './src/App'
import ReactDOMServer from "react-dom/server";

const createServer = async() => {

    const app = express()

    // Create Vite server in middleware mode and configure the app type as
    // 'custom', disabling Vite's own HTML serving logic so parent server
    // can take control
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    })
  
    // use vite's connect instance as middleware
    // if you use your own express router (express.Router()), you should use router.use
    app.use(vite.middlewares)
  
    app.use('*', async (req, res, next) => {

        const url = req.url

        try {
          // 1. Read index.html
          let template = fs.readFileSync(
            path.resolve(process.cwd(), 'index.html'),
            'utf-8'
          )
          // 2. Apply Vite HTML transforms. This injects the Vite HMR client, and
          //    also applies HTML transforms from Vite plugins, e.g. global preambles
          //    from @vitejs/plugin-react
          template = await vite.transformIndexHtml(url, template)
      
          // 3. Load the server entry. vite.ssrLoadModule automatically transforms
          //    your ESM source code to be usable in Node.js! There is no bundling
          //    required, and provides efficient invalidation similar to HMR.
          const { render } = await vite.ssrLoadModule('/src/main.tsx')
      
          // 4. render the app HTML. This assumes entry-server.js's exported `render`
          //    function calls appropriate framework SSR APIs,
          //    e.g. ReactDOMServer.renderToString()
          const appHtml = typeof window !== "undefined" && await render(url)
      
          // 5. Inject the app-rendered HTML into the template.
          const html = template.replace(`<!--ssr-outlet-->`, appHtml)
      
          // 6. Send the rendered HTML back.
          res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
        } catch (e) {
          // If an error is caught, let Vite fix the stack trace so it maps back to
          // your actual source code.
          vite.ssrFixStacktrace(e as any)
          next(e)
        }
    })
    // port can be changed in vite.config in server { port }
    const PORT = process.env.PORT || 5173
    app.listen( PORT, () => console.log( `server running on http://localhost:${ PORT }` ) )
  }
  createServer()