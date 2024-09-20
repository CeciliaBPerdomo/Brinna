import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/firebase/config";


export async function GET(request, { params }) {
    try {
        console.log("Hola")
        const { categoria } = params
        const productosRef = collection(db, "productos")

        const q = categoria === "todos"
            ? productosRef
            : query(productosRef, where("categoria", "==", categoria))

        const querySnapShot = await getDocs(q)
        const docs = querySnapShot.docs.map(doc => doc.data())
        return NextResponse.json(docs, { status: 200 });
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}