const fs = require('fs');

//DOSYA OLUSTURULDU
fs.writeFile('employees.json', '{"name":"umit", "age":25},', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('json dosya başarılı bir şekilde oluşturuldu.')
});
//DOSYA OKUMA
setTimeout(() => {
    fs.readFile('employees.json', 'utf8', (err,data) => {
        if(err) console.log(err);
        console.log(data)
        console.log('1.5 saniye sonra okunacak.')
    });
}, 1500)

//DOSYA GUNCELLEME

   setTimeout(() => {
    fs.appendFile('employees.json', '\n {"name": "Ahmet"}', 'utf8', (err)=>{
        console.log(err);
        console.log('1 saniye sonra guncellendi');
    }) ;

   }, 1000);

//DOSYA SILME
setTimeout(()=>{
    fs.unlink('employees.json',(err)=>{
        if(err) console.log(err);
        console.log('4 SANİYE SONRA DOSYA SILINECEK') 
    })
}, 4000)



