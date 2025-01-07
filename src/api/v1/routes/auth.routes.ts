// auth.routes.ts
import { Router } from 'express'
import { googleOAuth } from '@auth/auth.controllers'

const route = Router() // Crea un enrutador de Express.
 
export default (app: Router): void => {
  app.use('/auth', route) // Monta este router en `/auth`.

  // Define una ruta específica dentro del módulo auth.
  route.get('/g-oauth', googleOAuth)
}