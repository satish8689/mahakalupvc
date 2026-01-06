'use client';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import MiddleComponent from '@/components/MiddleComponent';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
// import './home.scss';

export default function Home() {

const [activeSection, setActiveSection] = useState("home");
// const [update, setActiveSection] = useState("home");

useEffect(()=>{
setActiveSection(activeSection)
},[activeSection])
    return (
        <div className="furniture-app">
            <Header setActiveSection={setActiveSection} />
            {activeSection === 'home' && <Slider />}
            <MiddleComponent activeSection={activeSection} setActiveSection={setActiveSection} />
            {/* <MiddleComponent/> */}
            {/* <WhyChooseUs /> */}
            <Footer />
        </div>
    );
}