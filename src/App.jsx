import "@fontsource/orbitron";<div style={{fontFamily:"Orbitron",textShadow:"0 0 20px #00ff88"

export default function App() {
  return (
    <div style={{
      background:"black",
      color:"#00ff88",
      minHeight:"100vh",
      textAlign:"center",
      padding:"20px"
    }}>

      <h1 style={{fontSize:"50px"}}>
        CYBER-X
      </h1>

      <img
        src="/pic.jpeg"
        alt="profile"
        style={{
          width:"180px",
          height:"180px",
          borderRadius:"50%",
          border:"4px solid #00ff88",
          objectFit:"cover",
          marginTop:"20px"
        }}
      />

      <h2>MK Hacker</h2>

      <p>Advanced cyber security platform</p>

      <div style={{marginTop:"30px"}}>

        <input
          type="text"
          placeholder="Username"
          style={{
            padding:"12px",
            width:"250px",
            margin:"10px",
            borderRadius:"10px"
          }}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          style={{
            padding:"12px",
            width:"250px",
            margin:"10px",
            borderRadius:"10px"
          }}
        />

        <br />

        <button
          style={{
            padding:"12px 30px",
            background:"#00ff88",
            border:"none",
            borderRadius:"10px",
            fontWeight:"bold"
          }}
        >
          SIGN IN
        </button>

      </div>

    </div>
  );
}
