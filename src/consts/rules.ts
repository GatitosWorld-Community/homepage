interface Rule {
    id?: string;
    number?: string;
    content: string;
}

interface SubSection {
    title: string;
    id?: string;
    description?:string;
    rules: Rule[];
}

interface Section {
    title: string;
    description?: string;
    id?: string;
    subsections?: SubSection[];
    rules?: Rule[];
}

interface RulesDocument {
    sections: Section[];
}


export const discordRules: RulesDocument = {
    "sections": [
        {
            "title": "Preámbulo",
            "description": "Este documento establece los principios y normas que rigen la interacción dentro de nuestra comunidad. También proporciona un marco claro sobre los términos y condiciones que los usuarios aceptan al participar en el servidor.",
            "id": "P",
            "rules": [
                {
                    "id": "P.1",
                    "content": "En este documento se establecen las normas y términos que regulan el acceso a los servicios ofrecidos por la comunidad de GatitosWorld en Discord, una plataforma propiedad de Discord Inc.\n\nCuando mencionamos \"nosotros\", nos referimos al equipo de administradores de la comunidad. Por otro lado, \"usted\" o \"ustedes\" hacen referencia al usuario o grupo de usuarios que leen este documento.\n\nInteractuar con nuestra comunidad implica aceptar estas condiciones y comprometerse a cumplirlas. En caso contrario, el equipo de moderación tomará las medidas necesarias para garantizar el cumplimiento de estas normas."
                }
            ]
        },
        {
            "title": "Legal",
            "description": "Este apartado está dedicado a garantizar la protección de sus derechos y la transparencia sobre cómo manejamos los datos de los usuarios de acuerdo con las leyes más estrictas en materia de privacidad y seguridad.",
            "id": "L",
            "rules": [
                {
                    "id": "L.1",
                    "content": "**Protección de datos**\n\nEn GatitosWorld priorizamos su privacidad y nos aseguramos de cumplir las normativas vigentes en protección de datos y seguridad. Los usuarios son identificados mediante códigos únicos, no vinculados a datos personales o confidenciales.\n\nOperamos bajo las leyes LOPD y RGPD de España y la Unión Europea, consideradas entre las más estrictas a nivel global. Esto garantiza la seguridad de sus datos y nos permite cumplir con otras normativas internacionales.\n\nSolo recopilamos la información estrictamente necesaria para mantener un registro de comportamiento dentro del servidor, incluyendo evidencias relacionadas con sanciones o advertencias.\n\nComo usuario, puede solicitar la eliminación de sus datos. No obstante, por motivos de calidad y seguridad, esta acción resultará en un veto permanente en la comunidad, ya que imposibilita al equipo de moderación almacenar las evidencias necesarias para gestionar conflictos.\n\nAsimismo, puede solicitar acceso a la información recopilada sobre usted. Sin embargo, no podemos compartir elementos que involucren a terceros para proteger su privacidad, como grabaciones donde participen otros usuarios."
                }
            ]
        },
        {
            "title": "Normas de Discord",
            "description": "Discord establece términos y políticas globales que rigen el comportamiento de los usuarios en su plataforma, dentro y fuera de cualquier servidor. Estas normas son aplicables a todos.",
            "id": "D",
            "rules": []
        },
        {
            "title": "Reglas generales",
            "description": "Estas reglas se aplican a todos los canales y situaciones dentro del servidor desde el momento en que te unes. Respetarlas garantiza un espacio seguro y respetuoso para todos.",
            "id": "G",
            "subsections": [
                {
                    "title": "Idiomas",
                    "id": "G.1",
                    "rules": [
                        { "number": "G.1.1", "content": "El idioma oficial del servidor es el español. Se espera que la comunicación principal sea en este idioma." },
                        { "number": "G.1.2", "content": "Se permite compartir contenido en otros idiomas que utilicen el mismo alfabeto que el español, como el inglés.\n✅ Ejemplo: \"Hello\"\n❌ Ejemplo: \"你好\"" },
                        { "number": "G.1.3", "content": "Nadie puede impedir a otro usuario utilizar el idioma oficial del servidor." },
                        { "number": "G.1.4", "content": "El uso excesivo o abusivo de idiomas alternativos puede considerarse una infracción a estas normas." }
                    ]
                },
                {
                    "title": "Uso de los canales",
                    "id": "G.2",
                    "rules": [
                        { "number": "G.2.1", "content": "Cada canal tiene un propósito o función específicos, descritos en los documentos correspondientes." },
                        { "number": "G.2.2", "content": "Respeta siempre la función del canal en el que estás participando." },
                        { "number": "G.2.3", "content": "En el caso de canales personalizados, su propósito será definido por su propietario, siempre que no contradiga estas normas." }
                    ]
                },
                {
                    "title": "Multicuentas",
                    "id": "G.3",
                    "rules": [
                        { "number": "G.3.1", "content": "Se permite tener más de una cuenta en el servidor." },
                        { "number": "G.3.2", "content": "Está prohibido ocultar la propiedad de una multicuenta al equipo de moderadores." },
                        { "number": "G.3.3", "content": "No está permitido usar multicuentas para evadir sanciones o restricciones, como el acceso a canales de voz." },
                        { "number": "G.3.4", "content": "Interactuar con el servidor desde varias cuentas al mismo tiempo está prohibido, excepto para moderadores en tareas específicas." }
                    ]
                },
                {
                    "title": "Comportamiento",
                    "id": "G.4",
                    "rules": [
                        { "number": "G.4.1", "content": "Muestra siempre respeto hacia los demás usuarios." },
                        { "number": "G.4.2", "content": "Evita iniciar discusiones o controversias innecesarias." }
                    ]
                },
                {
                    "title": "Libertad de expresión",
                    "id": "G.5",
                    "rules": [
                        { "number": "G.5.1", "content": "Limitamos ciertos aspectos de la libertad de expresión únicamente para preservar la armonía y evitar conflictos dentro de la comunidad." },
                        { "number": "G.5.2", "content": "Si surge un tema controvertido, el equipo de moderadores puede solicitar que se detenga. No cumplir con esta instrucción podría resultar en sanciones." },
                        { "number": "G.5.3", "content": "Los temas previamente discutidos que generen controversias pueden ser gestionados de la misma forma, a discreción del equipo de moderadores." },
                        { "number": "G.5.4", "content": "En los canales de voz, pueden tratarse temas sensibles con el consentimiento de todos los participantes, siempre que no se generen conflictos o faltas de respeto." }
                    ]
                },
                {
                    "title": "Vocabulario",
                    "id": "G.6",
                    "rules": [
                        { "number": "G.6.1", "content": "Utiliza un lenguaje respetuoso y evita términos ofensivos o inapropiados." },
                        { "number": "G.6.2", "content": "Adapta tu vocabulario al contexto y evita comentarios fuera de lugar." }
                    ]
                },
                {
                    "title": "Tu perfil",
                    "id": "G.7",
                    "rules": [
                        { "number": "G.7.1", "content": "Asegúrate de que tu perfil no contenga contenido no apto para menores." },
                        { "number": "G.7.2", "content": "Mantén un nombre legible y razonablemente corto (generalmente menos de 20 caracteres, según criterio del staff)." },
                        { "number": "G.7.3", "content": "Evita incluir ideologías políticas o temas controversiales en tu perfil." }
                    ]
                },
                {
                    "title": "SPAM y autopromoción",
                    "id": "G.8",
                    "rules": [
                        { "number": "G.8.1", "content": "Está prohibido el spam y la autopromoción en cualquier canal del servidor." },
                        { "number": "G.8.2", "content": "Está prohibido el spam y la autopromoción por mensaje directo a aquellos usuarios que no lo hayan solicitado o que no se encuentren en su lista de amistades." },
                        { "number": "G.8.3", "content": "Sólo se permitirá la promoción del contenido de Capitán Gato y asociados, cualquier otro tipo de promoción recaerá bajo las consecuencias del apartado `G.8.1` y/o `G.8.2`." }
                    ]
                }
            ]
        },
        {
            "title": "En canales de texto",
            "description": "",
            "id": "T",
            "rules": []
        },
        {
            "title": "En canales de voz",
            "description": "",
            "id": "V",
            "rules": []
        }
    ]
}
