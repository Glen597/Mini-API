import pool from "../config/db.js"

//récuperer les utilisateurs 

 const getUsers = async(req, res)=>{

    try
    {
        const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);}catch(error){
        res.status(500).json({ message: "Erreur Serveur", error});
    }

}

//récuperer un  utilisateur grace a son id
 const getUserById = async(req,res)=>{
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
 const createUser = async(req,res)=>{

    try{

        const { name, email} = req.body; 
        const result = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING * ", [name, email]);

        res.status(201).json(result.rows[0]);
    }catch(error){
        res.status(500).json({message: "erreur serveur", error})
    }
    

}

//mettre a jour un utilisateur
 const updateUser = async(req,res)=>{

    try{
        const {id} = req.params;
    const {name, email} = req.body;

    const result = await pool.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",[name, email, id] );

        if(result.rows.length === 0){
            return res.status(404).json({message: "Utilisateur nn trouvé"})
        }
        res.json(result.rows[0]);
}catch(error){

    res.status(500).json({message: "erreur serveur", error})

}
    }
    
    // 🔹 Supprimer un utilisateur
 const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
  
      if (result.rows.length === 0) return res.status(404).json({ message: "Utilisateur non trouvé" });
  
      res.json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error });
    }
  };

  export  default {getUsers, getUserById,createUser,updateUser,deleteUser }
