cat > src/firebase.js << 'EOF'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPpSKKrFMDXWTKyLyi8XTjQaPYErJQmS8",
  authDomain: "cyber-x-1190b.firebaseapp.com",
  projectId: "cyber-x-1190b",
  storageBucket: "cyber-x-1190b.firebasestorage.app",
  messagingSenderId: "582074449369",
  appId: "1:582074449369:web:77de7b254f9e34de2b6dc8",
  measurementId: "G-ZBBQG2TXTS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
EOF
