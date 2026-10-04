import Link from "next/link";
export default function Page(){
 return(
  <main style={{background:"#F5F0E6", minHeight:"100vh", padding:"32px"}}>
   <Link href="/apothecary">← Back to Apothecary</Link>
   <h1 style={{fontSize:"48px", marginTop:"20px"}}>Purwoceng</h1>
   <p><i>Pimpinella pruatjan • Dieng Plateau, Java</i></p>
   <p style={{marginTop:"10px"}}>Root • Traditional Vitality • 100ml Miron Jar • 80 Capsules</p>
   <h2 style={{fontSize:"32px", fontWeight:"bold", marginTop:"20px"}}>R499 - 100ml (80 Caps)</h2>
   <a href="https://wa.me/27687344919?text=I%20want%20Purwoceng%20R499" style={{display:"block", background:"#B87333", color:"white", padding:"16px", textAlign:"center", borderRadius:"30px", marginTop:"20px", textDecoration:"none"}}>Order via WhatsApp - R499</a>
  </main>
 )
}