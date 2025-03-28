import pool from "../config/db.js"

//récuperer les utilisateurs 

export const getUsers = async(req, res)=>{

    try
    {
        const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);}catch(error){
        res.status(500).json({ message: "Erreur Serveur", error});
    }

}

//récuperer un  utilisateur grace a son id
export const getUserById = async(req,res)=>{
    try{
        const {id} = req.params;
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

        if(result.rows.length === 0){
            return res.status(404).json({message: "Utilisateur non trouvé"});
        }
        res.json(result.rows[0]);
    }catch(error){
        res.status(500).json({message: "Erreur serveur", error});
    }
};


//creer un utilisateur
export const createUser = async(req,res)=>{

    try{

        const { name, email} = req.body; 
        const result = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING * ", [name, email]);

        res.send(201).json(result.rows[0]);
    }catch(error){
        res.status(500).json({message: "erreur serveur", error})
    }

}

//mettre a jour un utilisateur
