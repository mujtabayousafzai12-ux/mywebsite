export default function App() {
  return (
    <div style={{
      background:"black",
      color:"#00ff88",
      minHeight:"100vh",
      textAlign:"center",
      padding:"20px"
    }}>

      <h1 style={{fontSize:"50px"}}>CYBER-X</h1>

      <img
        src="/pic.jpeg"
        alt="profile"
        style={{
          width:"200px",
          height:"200px",
          borderRadius:"50%",
          border:"4px solid #00ff88",
          objectFit:"cover",
          marginTop:"20px"
        }}
      />

      <h2 style={{marginTop:"20px"}}>
        MK Hacker
      </h2>

      <p>Advanced cyber security platform</p>

    </div>
  );
}
