import axios from 'axios';
import { clientInstance } from '../constant'

export const onLoadCategoryList = async () => {
    return await clientInstance.get(`commerce/category`).then(res => { return res.data.data.categories }).catch(err => console.log(err))
}

export const onLoadProductList = async () => {
    return await clientInstance.get(`commerce/product`).then(res => { return res.data.data.products }).catch(err => console.log(err))
}