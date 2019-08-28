import axios from 'axios'


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Wk3qNb-3N7yeX5gwJ_N6LLU98m17u4oFiC7N9J0XkkUU5ccGBWzja0TXtpoUTW24EXIkBvCQREBtppTfLZabi8Q2-s2wXDkzrlb8ifhuwlw05r-vOAj3IfLwHDBlXXYx'
    }
})