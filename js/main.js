let getBooks= new Promise(resolve=>{
resolve('Books Got')
});

getBooks().then(data=>{
       console.log(data);

})
.catch(error=>{
    console.log(error);
})

