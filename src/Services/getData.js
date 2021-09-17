

  const getData = async (path) =>{
        const result = await  fetch("http://localhost:5000/api/v1"+path)
        if(!result){
            return false
        }

        return result.json();
    }

    export default getData


  
