<img
  src="/pic.jpeg"
  alt="profile"
  className="w-40 h-40 rounded-full mx-auto border-4 border-green-500 mb-6 object-cover"
/><section className="text-center mt-20">
import { FaShieldAlt, FaTerminal, FaLock } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 p-5">

      <nav className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-green-500">
          CYBER-X
        </h1>

        <button className="border border-green-500 px-4 py-2 rounded-lg">
          Login
        </button>
      </nav>

      <section className="text-center mt-20">

        <TypeAnimation
          sequence={[
            "Ethical Hacking Platform",
            2000,
            "Cyber Security Tools",
            2000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-4xl font-bold"
        />

        <p className="mt-6 text-gray-400">
          Advanced cyber security platform.
        </p>

        <button className="mt-8 bg-green-500 text-black px-6 py-3 rounded-xl font-bold">
          Get Started
        </button>
      </section>

      <section className="grid gap-6 mt-24">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-green-500 p-6 rounded-2xl bg-[#111]"
        >
          <FaShieldAlt className="text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">Security</h2>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-green-500 p-6 rounded-2xl bg-[#111]"
        >
          <FaTerminal className="text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">Terminal</h2>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-green-500 p-6 rounded-2xl bg-[#111]"
        >
          <FaLock className="text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">Encryption</h2>
        </motion.div>

      </section>
    </div>
  );
}
