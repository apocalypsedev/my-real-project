import { Route, Routes } from "react-router-dom";
import { Footer, Main, Navbar, About, Process, Clients, Services, Contact, Auth } from "./components";
import { useState } from "react";

const App = () => {

    const userToken = false;

    if(!userToken) {
        return (
            <Auth/>
        )
    }else{
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
                    <Route path="s/" element={<Login />} />
                </Routes>
                <Footer />
            </>
        )
    }

}

export default App;