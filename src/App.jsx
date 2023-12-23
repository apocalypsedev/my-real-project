import { Route, Routes } from "react-router-dom";
import { Footer, Main, Navbar, Login, About, Process, Clients, Services, Contact } from "./components";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/services" element={<Services />} />
                <Route path="/process" element={<Process />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Login />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;