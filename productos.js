module.exports = class Productos{
    constructor(){
        this.productos=[] //objeto de productos
        this.id=0
    }

listarProducto_id(id){ //devuelve producto según su id
    const producto=this.productos.find(prod => prod.id ==id)
    return producto || {error: 'producto no encontrado'}
}

listarProductos() //devuelve todos los productos
{
    return [...this.productos]
}

agregarProducto(producto){  //guarda un nuevo producto y lo devuelve con ya su id asignado
    const newProducto={...producto, id:++this.id}
    this.productos.push(newProducto)
    return newProducto
}

actualizarProducto(producto, id)//recibe y actualiza producto por id
{
    const newProducto={...producto, id:Number(id)} //me aseguro de entregarlo en formato numero
    const idx= this.productos.findIndex(prod => prod.id==id) //me guardo el index del producto a actualizar
    if (index!== -1)
    {
        this.productos[index]=newProducto
        return newProducto
    }
   else {return error}

}

eliminarProduto(id){ //elimina producto según su id
    const idx= this.productos.findIndex(prod => prod.id==id) //me guardo el index del producto a eliminr
    if (index!== -1)
    {
        return this.productos.splice(idx,1) //el primer indice de splice hace refernencia a desde donde se cambia el array y el 1 cuantas pos se eliminan. 
    }
   else {return {error:'Producto no encontrado'}}

}

} 