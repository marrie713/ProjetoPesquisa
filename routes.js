import express from 'express'

const routes = express.Router();

let lista = ['higiene', 'padaria', 'açougue', 'limpeza'];

routes.get('/',(req, res)=>{

    try{
    return res.status(200).json(lista);
    }
    catch{
    return res.status(500).json("Lista não encontrada")
    }
})

routes.get('/:produto',(req, res)=>{
    
    try{
        const { produto } = req.params
        for (let i = 0; i < lista.length; i++) {
        
            if(produto == lista[i])
                return res.status(200).json(produto)
            
        }
        return res.status(500).json(`Nenhum produto encontrado`)    
    }
    catch(error){
        return res.status(500).json(error)
    } 
    }
)

export default routes