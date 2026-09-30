export default function Home() {
  return (
    <div style={{minHeight:'100vh', background:'#faf9f6', color:'#0f1f1c'}}>
      <header style={{padding:'24px 32px', display:'flex', justifyContent:'space-between'}}>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <div style={{width:48, height:48, borderRadius:999, background:'white', border:'1px solid #ddd', padding:4}}>
            <img src="/logo.png" alt="logo" style={{width:'100%', height:'100%', objectFit:'contain'}} />
          </div>
          <b>ROOTSOURCE</b>
        </div>
      </header>
      <main style={{textAlign:'center', padding:'60px 20px'}}>
        <div style={{width:300, height:300, borderRadius:999, background:'white', margin:'0 auto 40px', display:'flex', alignItems:'center', justifyContent:'center', padding:30, boxShadow:'0 20px 60px rgba(0,0,0,0.1)'}}>
          <img src="/logo.png" alt="Root Source" style={{width:'100%', height:'100%', objectFit:'contain'}} />
        </div>
        <h1 style={{fontSize:56, fontWeight:900}}>ROOTSOURCE</h1>
        <p>Premium Herbal Company — Website Resurrected!</p>
        <p style={{marginTop:20, opacity:0.6}}>rootsource.one is alive again</p>
      </main>
    </div>
  )
}