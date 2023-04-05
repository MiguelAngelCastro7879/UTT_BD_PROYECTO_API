/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/getDataWithEvWeek', "DataController.getDataWithEvWeek")
Route.get('/getDataWithTech', "DataController.getDataWithTech")
Route.get('/getDataWithEvsirebreed', "DataController.getDataWithEvsirebreed")
Route.get('/getDataWithBrd', "DataController.getDataWithBrd")
Route.get('/getDataWithAgeda', "DataController.getDataWithAgeda")
Route.get('/getDataWithBredREas', "DataController.getDataWithBredREas")
Route.get('/getDataWithDate', "DataController.getDataWithDate")
Route.get('/getDataWithPen', "DataController.getDataWithPen")
Route.get('/getDataWithConcepRate', "DataController.getDataWithConcepRate")
Route.get('/getDataWithBarnNm', "DataController.getDataWithBarnNm")