import axios from 'axios';
import { clientInstance } from '../constant'

export const onLoadCategoryList = async () => {
    return await clientInstance.get(`commerce/category`).then(res => { return res.data.data.categories }).catch(err => console.log(err))
}