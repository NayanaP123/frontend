import axios from 'axios';


const commonApi=async(httpmethod, url,reqBody,reqHeader)=>{
    // reqHeader---login user feature access-->token
    const reqConfig={   
        method:httpmethod,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}//y/n
    }

    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })

}

export default commonApi