import React from "react";

export default function App() {
  return (
    <div
      style={{
        background: "#000",
        color: "#00ff88",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          borderBottom: "1px solid #00ff88",
        }}
      >
        <h1 style={{ color: "#00ff88", fontSize: "35px" }}>
          CYBER-X
        </h1>

        <button
          style={{
            background: "transparent",
            color: "#00ff88",
            border: "2px solid #00ff88",
            padding: "10px 25px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          LOGIN
        </button>
      </nav>

      {/* HERO SECTION */}
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <img
          src="/pic.jpeg"
          alt="profile"
          style={{
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            border: "5px solid #00ff88",
            objectFit: "cover",
            boxShadow: "0 0 30px #00ff88",
          }}
        />

        <h1
          style={{
            fontSize: "70px",
            marginTop: "25px",
            color: "#00ff88",
            textShadow: "0 0 20px #00ff88",
          }}
        >
          CYBER-X
        </h1>

        <h2
          style={{
            color: "#ffffff",
            fontSize: "40px",
            fontStyle: "italic",
          }}
        >
          Advanced Cyber Security Platform
        </h2>

        <p
          style={{
            color: "#cccccc",
            fontSize: "20px",
            marginTop: "20px",
          }}
        >
          Join the world of ethical hackers. Learn, explore and
          secure the digital world.
        </p>

        {/* LOGIN BOX */}
        <div
          style={{
            maxWidth: "400px",
            margin: "40px auto",
          }}
        >
          <input
            type="text"
            placeholder="Username"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              background: "#111",
              border: "2px solid #00ff88",
              borderRadius: "10px",
              color: "white",
              fontSize: "18px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              background: "#111",
              border: "2px solid #00ff88",
              borderRadius: "10px",
              color: "white",
              fontSize: "18px",
            }}
          />

          <button
            style={{
              width: "100%",
              padding: "15px",
              background: "#00ff88",
              border: "none",
              borderRadius: "10px",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            SIGN IN
          </button>
        </div>
      </div>

      {/* WELCOME SECTION */}
      <div
        style={{
          textAlign: "center",
          padding: "50px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            color: "#00ff88",
            textShadow: "0 0 15px #00ff88",
          }}
        >
          WELCOME TO HACKER COMMUNITY
        </h1>

        <p
          style={{
            color: "#ccc",
            fontSize: "20px",
            maxWidth: "700px",
            margin: "20px auto",
          }}
        >
          This is not just a website. This is a movement.
          Learn ethical hacking, Linux, penetration testing,
          cyber security and bug bounty hunting.
        </p>
      </div>

      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          padding: "30px",
        }}
      >
        {[
          "Ethical Hacking",
          "Penetration Testing",
          "Web Security",
          "Linux Commands",
          "Bug Bounty",
        ].map((item) => (
          <div
            key={item}
            style={{
              border: "2px solid #00ff88",
              borderRadius: "15px",
              padding: "30px",
              textAlign: "center",
              background: "#111",
              boxShadow: "0 0 15px #00ff88",
            }}
          >
            <h2>{item}</h2>

            <p style={{ color: "#ccc" }}>
              Learn professional cyber security skills.
            </p>

            <button
              style={{
                marginTop: "15px",
                background: "#00ff88",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
            >
              EXPLORE
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          borderTop: "1px solid #00ff88",
          marginTop: "50px",
          color: "#ccc",
        }}
      >
        © 2026 CYBER-X | Elite Hacker Community
      </footer>
    </div>
  );
}
