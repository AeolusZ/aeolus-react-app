function post(url, body) {
   return  fetch(url)
    .then(res => res.json())
    .then(res => {
        return res
    })
} 
export {post}