import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config"


export async function GET(request, { params }) {
    const productos = collection(db, "productos")
    const querySnapShot = await getDocs(productos)
    const docs = querySnapShot.docs.map(doc => doc.data())

    return NextResponse.json(docs)
}