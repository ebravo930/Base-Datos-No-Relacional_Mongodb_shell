// Conexión explícita a la base de datos con credenciales
//conn = Mongo('mongodb://root:example@localhost:27017/?authSource=admin');
//db = conn.getDB('tienda');

// Conectar a MongoDB
// Crear y usar la base de datos 'tienda'
db = db.getSiblingDB('tienda');

// Crear colecciones si no existen
if (!db.getCollectionNames().includes('productos')) {
    db.createCollection('productos');
}
if (!db.getCollectionNames().includes('clientes')) {
    db.createCollection('clientes');
}

// Insertar documentos en la colección 'productos'
db.productos.insertMany([
    {nombre: 'Cafetera', precio: 99, categorias: ['electrodomésticos', 'cocina']},
    {nombre: 'Licuadora', precio: 50, categorias: ['electrodomésticos', 'cocina']},
    {nombre: 'Tablet', precio: 300, categorias: ['electrónica', 'computación']}
]);

// Insertar documentos en la colección 'clientes'
db.clientes.insertMany([
    {nombre: 'Carlos', contacto: 'carlos@example.com', ciudad: 'Madrid'},
    {nombre: 'Luisa', contacto: 'luisa@example.com', ciudad: 'Barcelona'},
    {nombre: 'Ana', contacto: 'ana@example.com', ciudad: 'Valencia'}
]);

// Consultar todos los productos
print('Todos los productos:');
db.productos.find().forEach(printjson);

// Consultar clientes de Madrid
print('Clientes de Madrid:');
db.clientes.find({ciudad: 'Madrid'}).forEach(printjson);

// Actualizar el precio de la 'Cafetera'
db.productos.updateOne({nombre: 'Cafetera'}, {$set: {precio: 89}});

// Eliminar un producto
db.productos.deleteOne({nombre: 'Licuadora'});

// Agregación para calcular el precio promedio de los productos
var precioPromedio = db.productos.aggregate([
    {$group: {_id: null, precioPromedio: {$avg: '$precio'}}}
]).toArray();

print('Precio promedio de los productos:');
printjson(precioPromedio);

// Listar todos los clientes
print('Todos los clientes:');
db.clientes.find().forEach(printjson);

// Salir de Mongo Shell
quit();
