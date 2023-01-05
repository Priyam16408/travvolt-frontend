import axios from "axios"

// const authInstance = axios.create({
//     baseURL:`${process.env.REACT_APP_API}/`,
//      });



function api(){
    const userLogin=(payload)=>{
     
        return axios({
          method:"POST",
          url:"/api/auth/signin",
          baseURL:"http://35.154.173.27:8000",
          data:payload
        })
     
       
    }

    // post("http://35.154.173.27:8000/api/auth/signup")
    const userSignUp=(payload)=>{
      return axios({
        method:"POST",
        url:"/api/auth/signup",
        baseURL:"http://35.154.173.27:8000",
        data:payload
      })
      
        
    }

    

    return {userLogin, userSignUp}
}



const userLoginApi=api()

export default userLoginApi

// export const userSignUp=(user)=>{

//     authInstance.request({
//         method:"POST",
//         data:user,
//         url:"/api/auth/signup"
// ,
//     })
//     // const url="/api/auth/signup"
//     // await axios.post(url)
// }

// export const userLogIn=(user)=>{

//     authInstance.request({
//         method:"GET",
//         url:"/api/auth/signin"
// ,
//     })
//     // const url="/api/auth/signin"
//     // await axios.get(url)
// }

