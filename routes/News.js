const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/NewsModel')
const News = mongoose.model('News')

router.get('/', (req,res) => {
    res.status(200).send({message: "ALL OK", route:"MAIN"})
})

router.get('/Cadastrar', async (req,res) => {
    try{
        const Noticias = {
            id:10,
            titulo: "Como é bom ser um programador",
            noticia:"Programador é visto em estado vegetativo"
        }
        await new News(Noticias).save()
        res.status(200).send({error:false, message:"Successfully!!!"})
    }catch(err){
        res.status(400).send({error:true, message:err})
    }
    
})

router.get('/Procurar/:id', async (req, res) => {
    try{
        const result = await News.find({id:req.params.id})
        if (result){
            res.status(200).send({success:true, result:result})
        }else{
            res.status(400).send({error:true, message:"AI NAO CARAI"})
        }
    }catch(err){
        console.log(err)
    }
})


router.get('/Deletar/:id', async(req, res) => {
    try{
        const id = req.params.id
        if (isNaN(id)){
            res.status(400).send({error:true, message:"Just number, your dumb!"})
        }

        if (id){
            await News.deleteMany({id: req.params.id})
            res.status(200).send({success:true, message:"DELETADO COM SUCESSO"})
        }else{
            res.status(400).send({error:true, message:"Digite um ID!"})
        }
    }catch(err){
        console.log(err)
    }
})


module.exports = router