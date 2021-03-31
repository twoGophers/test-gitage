class LocalStorageUtil {
    constructor() {
        this.keyName = 'products'
    }
   getProducts() {//позволяющий получить все продукты в лок хранилище
const productsLocalStorage = localStorage.getItem(this.keyName)
if(productsLocalStorage !== null) {
    return JSON.parse(productsLocalStorage)
}
return []


   }
   putProducts(id) {//позволяет добавлять новые элементы
    let pushProduct = false
let products = this.getProducts()
const index = products.indexOf(id)

if(index === -1) {
    products.push(id)
    pushProduct = true
} else {
    products.splice(index, 1)
}


localStorage.setItem(this.keyName, JSON.stringify(products))


return { pushProduct, products}
   }
}

const localStorageUtil = new LocalStorageUtil()

