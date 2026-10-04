import Link from "next/link";
export default function Page(){
 return(
  <main style={{background:"#F5F0E6", minHeight:"100vh", padding:"32px"}}>
   <Link href="/apothecary">← Back</Link>
   <h1 style={{fontSize:"48px", marginTop:"20px"}}>Menthol Crystals</h1>
   <p><i>Mentha arvensis • Pure Crystals</i></p>
   <p style={{marginTop:"10px"}}>100ml Miron Jar • 50g Pure Crystals</p>
   <h2 style={{fontSize:"32px", fontWeight:"bold", marginTop:"20px"}}>R199 - 100ml (50g)</h2>
   <a href="https://wa.me/27687344919?text=Menthol%20Crystals%20R199%20100ml" style={{display:"block", background:"#B87333", color:"white", padding:"16px", textAlign:"center", borderRadius:"30px", marginTop:"20px", textDecoration:"none"}}>Order via WhatsApp - R199</a>
  </main>
 )
}