export default function Home(){
return (<main style={{minHeight:'100vh',background:'#fbfaf7',color:'#0f1f1c'}}>
<div style={{maxWidth:1280,margin:'0 auto',padding:'24px 32px',display:'flex',justifyContent:'space-between'}}>
<div style={{display:'flex',gap:12,alignItems:'center'}}><div style={{width:44,height:44,background:'white',borderRadius:999,padding:6}}><img src="/logo.png" style={{width:'100%',height:'100%',objectFit:'contain'}}/></div><b style={{letterSpacing:4,fontSize:12}}>ROOTSOURCE</b></div><div style={{background:'#0f1f1c',color:'white',padding:'10px 20px',borderRadius:999,fontSize:11}}>LIVE</div></div>
<div style={{maxWidth:1280,margin:'0 auto',padding:'80px 32px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:40,alignItems:'center'}}>
<div><h1 style={{fontSize:80,fontWeight:900,lineHeight:0.9}}>ROOT<br/>SOURCE</h1><p style={{letterSpacing:4,opacity:0.5,fontSize:12,marginTop:16}}>Premium Herbal Company</p><p style={{marginTop:24,maxWidth:400,opacity:0.7}}>Fresh start. This is Day 1.</p><div style={{marginTop:32,background:'#1a3a34',color:'white',padding:'14px 28px',borderRadius:999,display:'inline-block',fontSize:12}}>SHOP COLLECTION →</div></div>
<div style={{display:'flex',justifyContent:'center'}}><div style={{width:380,height:380,background:'white',borderRadius:999,padding:40,boxShadow:'0 30px 80px rgba(0,0,0,0.08)'}}><img src="/logo.png" style={{width:'100%',height:'100%',objectFit:'contain'}}/></div></div></div>
</main>)
}