const express = require ('express')
const Productos  = require('./productos.js')
const app = express()
const {Router} = express //La clase Router se usa para crear un nuevo objeto de enrutador
app.use(express.json())
app.use(express.urlencoded({ extended: true })) //permite que acepte datos que no sean solo texto
app.use (express.static('public'))

const productos = new Productos()
const router = new Router()

router.post('/', (req,res) => {
    res.json(productos.agregarProducto(req.body,req.params.id))
})

router.put('/:id', (req, res) =>{
    const produUpdate = productos.actualizarProducto(req.body,req.params.id)
    if(produUpdate==error) 
        return res.json({error:'Producto no encontrado'})
    else 
        res.json(produUpdate)
})

router.delete('/:id', (req,res) => {
    const produDelete=productos.eliminarProduto(req.params.id)
    res.json(produDelete)
})

router.get('/', (req,res) =>{
    const listaProdus=productos.listarProductos()
    res.json(listaProdus)
})

router.get('/:id', (req,res) => {
    const listaProdusId=productos.listarProducto_id(req.params.id)
    res.json(listaProdusId)
})

app.use('/api/productos', router)

//server
const PORT = 8080 //se usa este generalmente
const server = app.listen(PORT,()=>{console.log ('servidor HTTP escuchando en el puerto' + PORT)})

