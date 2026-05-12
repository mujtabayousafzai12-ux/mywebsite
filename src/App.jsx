import "@fontsource/orbitron";
import { motion } from "framer-motion";
import { FaUserSecret, FaShieldAlt, FaTerminal } from "react-icons/fa";

export default function App() {
  return (
    <div
      style={{
        background: "black",
        color: "#00ff88",
        minHeight: "100vh",
        fontFamily: "Orbitron",
        overflowX: "hidden",
      }}
    >

      {/* HERO SECTION */}
      <div
        style={{
          textAlign: "center",
          paddingTop: "80px",
          paddingBottom: "100px",
        }}
      >
        <FaUserSecret
          style={{
            fontSize: "120px",
            filter: "drop-shadow(0 0 20px #00ff88)",
          }}
        />

        <h1
          style={{
            fontSize: "60px",
            textShadow: "0 0 20px #00ff88",
            marginTop: "20px",
          }}
        >
          CYBER-X
        </h1>

        <p style={{ fontSize: "20px" }}>
          Elite Hacker Community
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 40px",
            background: "#00ff88",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 20px #00ff88",
          }}
        >
          ENTER SYSTEM
        </button>
      </div>

      {/* WELCOME SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            textShadow: "0 0 15px #00ff88",
          }}
        >
          Welcome To Hacker Community
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            marginTop: "20px",
            lineHeight: "35px",
            color: "#aaa",
          }}
        >
          Learn ethical hacking, cyber security,
          penetration testing, Linux systems,
          digital defense and modern cyber technologies.
        </p>
      </motion.div>

      {/* CYBER LAB */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
          padding: "50px",
        }}
      >

        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            background: "#111",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 0 20px #00ff88",
            textAlign: "center",
          }}
        >
          <FaShieldAlt style={{ fontSize: "50px" }} />
          <h2>Cyber Security</h2>
          <p>Advanced digital protection systems.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            background: "#111",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 0 20px #00ff88",
            textAlign: "center",
          }}
        >
          <FaTerminal style={{ fontSize: "50px" }} />
          <h2>Terminal Lab</h2>
          <p>Linux and Termux command practice.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            background: "#111",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 0 20px #00ff88",
            textAlign: "center",
          }}
        >
          <FaUserSecret style={{ fontSize: "50px" }} />
          <h2>Ethical Hacking</h2>
          <p>Learn professional cyber skills.</p>
        </motion.div>

      </div>

    </div>
  );
}
