'use client';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Products from '@/components/Products';

export default function ProductList() {
    const router = useRouter();
   const [activeSection, setActiveSection] = useState("home");

    return (
        <>
            <Header setActiveSection={setActiveSection} />
            <Products/>
        </>
    );
}
