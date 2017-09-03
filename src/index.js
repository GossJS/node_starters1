import http from 'http';
http.createServer(
  (req,res) => {
    if (req.url == '/quit') {
      //мгновенное прекращение обслуживания
      process.exit();
    }
    if (req.url == '/stop') {
      //прекращение при следующем запросе
      process.nextTick(()=>{throw new Error('Stop!')});
    }
    res.end('server working!');
  }
)
 .listen(4321, ()=>console.log(`started ${process.pid}`));
