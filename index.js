import express from "express"

const app = express()
const port = 3000


const currentDate = new Date()
let day = currentDate.getDay
let advice = 'Work hard today'

if (day == 0 || day == 6) {
    advice = 'Enjoy the weekend'
}

app.get('/', (req, res) => {
    res.render('index.ejs',  {
        advice: advice
    })
})

// let seconds = currentDate.getSeconds()
// let data = {
//     seconds: seconds,
//     title: 'The Ejs tags',
//     items: ['Apple', 'Banana', 'Mango', 'Pears','Grapes', 'Orange'],
//     html: "<h2>Here is the Html content</h2>"
// }


// app.get('/ejs-tags', function(req, res) {

//     res.render('ejs_tags.ejs', data)
// })
app.listen(port, () =>{
    console.log(`App is runing at port ${port}`)
})