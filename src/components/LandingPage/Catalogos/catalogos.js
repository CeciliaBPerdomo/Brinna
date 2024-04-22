import CatalagoPara from "./catalogo_para"

const Catalago = () => {

    return (
        <div className="w-full grid grid-cols-3">
            <div className="bg-blue-100">
                <CatalagoPara para={"él"} />
            </div>

            <div className="bg-green-100">
                <CatalagoPara para={"ella"} />
            </div>

            <div className="bg-blue-100">
                <CatalagoPara para={"los más chicos"} />
            </div>
        </div>
    )
    
}

export default Catalago