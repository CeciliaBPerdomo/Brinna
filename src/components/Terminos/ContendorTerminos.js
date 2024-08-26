import React from "react";

// CSS
import "../Terminos/contenedorTerminos.css"

// Fuente
import { Jost } from "next/font/google"

const jost = Jost({
    weight: "500",
    subsets: ['latin'],
})

const subjost = Jost({
    weight: "600",
    subsets: ['latin'],
})


const ContenedorTerminos = () => {
    return (
        <div>
            <div className="contenedor_principal_terminos">
                <p className={`terminos_contenedor ${subjost}`}>Términos y condiciones</p>
            </div>
            <div className="contenedor_texto_terminos">
                <p className={`texto_contenedor_terminos ${jost}`}>
                    Bienvenido a <b>Brinna</b>.
                    Al acceder y utilizar nuestra plataforma, aceptas cumplir con estos términos y condiciones.
                    Estos términos se aplican a todos los usuarios de la plataforma, incluidos los vendedores, compradores y visitantes.
                    Si no estás de acuerdo con alguno de estos términos, te recomendamos que no utilices nuestro sitio web o servicios.
                    Brinna es una plataforma en línea dedicada a la compra y venta de ropa de segunda mano.
                    Facilitamos la conexión entre vendedores y compradores, pero no poseemos ni inspeccionamos los artículos en venta.
                </p>

                <div className={`texto_contenedor_terminos ${jost}`}>
                    <b>Registro de usuario: </b>
                    <ol>
                        <li>Para comprar o vender productos en Brinna, es necesario registrarse creando una cuenta.</li>
                        <li>Los usuarios deben proporcionar información verdadera, precisa y actualizada en el momento de registrarse.</li>
                        <li>Cada usuario es responsable de mantener la seguridad de su cuenta y contraseña, y debe notificar a Brinna en caso de cualquier uso no autorizado de su cuenta.</li>
                    </ol>
                </div>

                <div className={`texto_contenedor_terminos ${jost}`}>
                    <b>Para los compradores:</b>
                    <ol>
                        <li>Brinna facilita la compra de ropa de segunda mano, pero no garantiza la calidad, autenticidad o condición de los artículos vendidos.</li>
                        <li>Las compras se deben realizar a través de nuestra plataforma y no fuera de ella.</li>
                        <li>No se aceptarán devoluciones ni reembolsos a menos que el artículo esté significativamente diferente de la descripción proporcionada por el vendedor.</li>
                    </ol>
                </div>

                <div className={`texto_contenedor_terminos ${jost}`}>
                    <b>Para los vendedores:</b>
                    <ol>
                        <li>Al listar un artículo para la venta, el vendedor garantiza que es el propietario legítimo y que el artículo es auténtico.</li>
                        <li>Los vendedores deben proporcionar una descripción precisa del artículo, incluidas las fotos que reflejen su estado actual.</li>
                        <li>Brinna cobrará una comisión sobre cada venta realizada a través de la plataforma, la cual será deducida automáticamente antes de que el pago sea transferido al vendedor.</li>
                    </ol>
                </div>

                <div className={`texto_contenedor_terminos ${jost}`}>
                    <b>Pagos:</b>
                    <ol>
                        <li>Todos los pagos se procesan a través de proveedores de pago seguros.</li>
                        <li>Brinna no almacena información financiera de los usuarios.</li>
                        <li>Los compradores deben completar el pago para que su pedido sea procesado y enviado por el vendedor.</li>
                    </ol>
                </div>

                <div className={`texto_contenedor_terminos ${jost}`}>
                    <b>Envío:</b>
                    <ol>
                        <li>El vendedor es responsable de preparar y enviar el artículo dentro del plazo especificado en la página de venta.</li>
                        <li>Los costos de envío serán calculados al momento de la compra y pueden variar dependiendo de la ubicación del comprador.</li>
                    </ol>
                </div>

                <div className={`texto_contenedor_terminos ${jost}`}>
                    <b>Políticas de reembolso y devolución:</b>
                    <ol>
                        <li>Las devoluciones solo serán aceptadas si el artículo recibido no coincide con la descripción proporcionada por el vendedor.</li>
                        <li>El comprador debe notificar cualquier problema con su compra dentro de los 5 días hábiles posteriores a la recepción del artículo.</li>
                    </ol>
                </div>

                <div className={`texto_contenedor_terminos ${jost}`}>
                    <b>Conducta del usuario:</b>
                    <ol>
                        <li>Todos los usuarios deben utilizar Brinna de manera legal y respetuosa.</li>
                        <li>Está prohibido el uso de la plataforma para vender artículos falsificados, ilegales o en condiciones inaceptables.</li>
                        <li>Brinna se reserva el derecho de eliminar cualquier contenido inapropiado o prohibir el acceso a usuarios que incumplan con estos términos.</li>
                    </ol>
                </div>

                <p className={`texto_contenedor_terminos ${jost}`}>
                    <b>Propiedad intelectual: </b>
                    Todo el contenido disponible en la plataforma de Brinna, incluidos los textos, gráficos, logotipos, imágenes y software,
                    está protegido por derechos de autor y otras leyes de propiedad intelectual. El uso no autorizado de cualquier contenido de
                    Brinna está estrictamente prohibido.
                </p>

                <div className={`texto_contenedor_terminos ${jost}`}>
                    <b>Exención de responsabilidad:</b>
                    <ol>
                        <li>Brinna no se hace responsable de las transacciones realizadas entre compradores y vendedores.</li>
                        <li>Brinna no se responsabiliza por ningún daño, pérdida o perjuicio derivado del uso de la plataforma.</li>
                    </ol>
                </div>

                <p className={`texto_contenedor_terminos ${jost}`}>
                    <b>Modificación de los términos: </b> 
                    Brinna se reserva el derecho de modificar estos términos y condiciones en cualquier momento. 
                    Las modificaciones se publicarán en el sitio web, y el uso continuado de la plataforma implica la aceptación 
                    de dichos cambios.
                </p>

                <p className={`texto_contenedor_terminos ${jost}`}>
                    <b>Ley aplicable: </b>
                    Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes aplicables en el país de operación de Brinna.
                </p>

                <p className={`texto_contenedor_terminos ${jost}`}>
                    <b>Contacto: </b>
                    Para cualquier pregunta sobre estos términos y condiciones, puedes contactarnos a través de nuestro correo electrónico de soporte en 
                    brinnaropadesegundamano@gmail.com
                </p>
            </div>
        </div>
    )
}

export default ContenedorTerminos