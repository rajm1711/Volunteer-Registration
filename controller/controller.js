
let crudStore = [];



const homeController = (req,res) =>{

    res.render('Regist',{stores : crudStore});
}

const addController =(req , res) =>{

    console.log("CRUD ADDED");

    console.log("Body", req.body); 
    
      let newId;
      if (crudStore.length > 0) {
          newId = crudStore[crudStore.length - 1].id + 1;
      } else {
          newId = 1;
      }
  
      let crudObj = {
          id: newId,                
          name: req.body.name,      
          email: req.body.email,
          phone: req.body.phone,
          skills: req.body.skills     
      };
    
    console.log("Obj", crudObj);

    crudStore = [...crudStore, crudObj ] 
    console.log("Store",crudStore);

    res.redirect('/');
    
    
}

const editController =(req,res)=>{

    console.log(req.params);
    let {id} = req.params;
    let singleCrud = crudStore.find((store) =>{
        return store.id ==id
    })
    console.log("Single Crud..", singleCrud);

    res.render('editRegis',{singleCrud});
}

const updateController = (req,res)=>{
    console.log("Body ==>", req.body);  //change//

    let {id} =req.params

    let updateCrud = crudStore.map((crud) =>{
        if(crud.id == id){
            crud.name = req.body.name,
            crud.email = req.body.email
        }
        return crud
    })

    crudStore = updateCrud;

    console.log("Crud updated",updateCrud);
    
    res.redirect('/');

    console.log("Body",req.body);
    
    
}

const deleteController = (req,res)=>{
    console.log("Body ==>", req.body);  //change//

    let {id} =req.params
    let deleteCrud = crudStore.filter((del) =>{
        return del.id != id
    })

    crudStore = deleteCrud;

    console.log("Crud",crudStore);
    console.log("Deleted successfully");

    res.redirect('/');

    
    
}

module.exports = {homeController,addController,editController,updateController,deleteController}
