const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

let app=express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json)


//Routes
app.post('/create',async(req,res)=>{
    let reqs = await model.User.create({
        'name':req.body.nameUser,
        'password':req.body.passwordUser,
        'email':req.body.emailUser,
        'createdAt':new Date(),
        'updatedAt':new Date()
    });
    if(reqs){
        res.status(200).json({ msg: "Sucesso!" })
    }
});

app.get('/', (req, res) => {
    res.send('Ola!')
})



//Start server
let port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})