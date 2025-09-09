document.addEventListener('DOMContentLoaded', () => {
    const modules = [
        {
            id: 1,
            title: 'Anatomía y Fisiología del Cuello',
            summary: 'El cuello se divide en triángulos anterior y posterior por el músculo esternocleidomastoideo. Estos triángulos se subdividen para localizar estructuras vitales. Las fascias del cuello (superficial y profunda) organizan los músculos, vasos y órganos, y su conocimiento es crucial para los abordajes quirúrgicos. Estructuras clave incluyen el paquete vasculonervioso (carótida, yugular, nervio vago) y la glándula tiroides.',
            quiz: [
                {
                    question: '¿Qué músculo principal divide el cuello en un triángulo anterior y posterior?',
                    options: ['Trapecio', 'Omohioideo', 'Esternocleidomastoideo', 'Digástrico'],
                    answer: 'Esternocleidomastoideo',
                    justification: 'El músculo esternocleidomastoideo es la estructura anatómica clave que divide el cuello en los triángulos anterior y posterior, sirviendo como referencia fundamental en la cirugía de cuello.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: '¿Cuál es la función principal de la hoja media de la aponeurosis cervical profunda?',
                    options: ['Envolver el músculo platisma', 'Envolver el paquete vasculonervioso del cuello', 'Formar el piso de la boca', 'Cubrir la piel'],
                    answer: 'Envolver el paquete vasculonervioso del cuello',
                    justification: 'La hoja media de la aponeurosis profunda envuelve el paquete vasculonervioso (arteria carótida, vena yugular interna y nervio vago) y forma desdoblamientos sobre músculos y órganos como la tiroides.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: 'El triángulo carotídeo contiene todas las siguientes estructuras EXCEPTO:',
                    options: ['Arteria carótida común', 'Vena yugular interna', 'Nervio hipogloso', 'Glándula paratiroides'],
                    answer: 'Glándula paratiroides',
                    justification: 'El triángulo carotídeo contiene la arteria carótida, la vena yugular interna y nervios como el vago e hipogloso. Las glándulas paratiroides se encuentran en el triángulo visceral o muscular.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: '¿Qué nervio se encarga de la movilidad de las cuerdas vocales?',
                    options: ['Nervio vago', 'Nervio laríngeo recurrente', 'Nervio frénico', 'Nervio espinal'],
                    answer: 'Nervio laríngeo recurrente',
                    justification: 'El nervio laríngeo recurrente, una rama del nervio vago, es el responsable de la inervación motora de la mayoría de los músculos intrínsecos de la laringe, controlando la movilidad de las cuerdas vocales.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: '¿A qué nivel de drenaje linfático drenan la orofaringe y nasofaringe?',
                    options: ['Nivel I', 'Nivel II', 'Nivel IV', 'Nivel VI'],
                    answer: 'Nivel II',
                    justification: 'El Nivel II (yugulodigástricos) es el principal sitio de drenaje para la orofaringe y nasofaringe.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: 'La arteria tiroidea superior es rama de:',
                    options: ['La arteria subclavia', 'El tronco tirocervical', 'La arteria carótida externa', 'La arteria carótida interna'],
                    answer: 'La arteria carótida externa',
                    justification: 'La irrigación arterial de la tiroides proviene de la arteria tiroidea superior (rama de la carótida externa) y la arteria tiroidea inferior (rama de la subclavia).',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Cuántas glándulas paratiroides existen normalmente?',
                    options: ['Dos', 'Tres', 'Cuatro', 'Seis'],
                    answer: 'Cuatro',
                    justification: 'Cerca del 85% de las personas tiene cuatro glándulas paratiroides, aunque el número puede variar.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'El conducto torácico drena la linfa del lado izquierdo del cuello en:',
                    options: ['La vena yugular externa', 'El ángulo venoso de Pirogoff', 'La vena subclavia derecha', 'Directamente en la aorta'],
                    answer: 'El ángulo venoso de Pirogoff',
                    justification: 'El ángulo venoso de Pirogoff, formado por la unión de la yugular interna y la subclavia, es donde drena el conducto torácico en el lado izquierdo.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: 'La rama externa del nervio laríngeo superior inerva al músculo:',
                    options: ['Tiroaritenoideo', 'Cricoaritenoideo lateral', 'Vocal', 'Cricotiroideo'],
                    answer: 'Cricotiroideo',
                    justification: 'La rama externa del nervio laríngeo superior inerva al músculo cricotiroideo, cuya función es tensar las cuerdas vocales para producir tonos agudos.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'El compartimento central del cuello (Nivel VI) contiene:',
                    options: ['Glándula parótida', 'Músculo trapecio', 'Glándula tiroides y paratiroides', 'Vena yugular externa'],
                    answer: 'Glándula tiroides y paratiroides',
                    justification: 'El compartimento central (Nivel VI) contiene la laringe, tráquea, esófago, glándulas tiroides y paratiroides, y los nervios laríngeos recurrentes.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                }
            ],
            completed: false
        },
        {
            id: 2,
            title: 'Patología Tiroidea',
            summary: `La patología tiroidea abarca un espectro de enfermedades que van desde el crecimiento benigno de la glándula (bocio) hasta nódulos solitarios y cáncer. El bocio es el crecimiento de la glándula tiroides y se conoce desde la antigüedad. Los nódulos tiroideos son comunes, presentándose hasta en un 4% de la población, pero el cáncer de tiroides es mucho menos frecuente. La evaluación de un nódulo tiroideo se centra en descartar malignidad, utilizando herramientas como la ecografía y la biopsia por aspiración con aguja fina (BAAF), que es el método diagnóstico más preciso. El hipertiroidismo, o exceso de hormona tiroidea, puede ser causado por la enfermedad de Graves, bocio multinodular tóxico o un adenoma tóxico solitario.`,
            quiz: [
                {
                    question: '¿Cuál es el método diagnóstico más preciso para evaluar un nódulo tiroideo?',
                    options: ['Ultrasonografía de cuello', 'Gammagrafía tiroidea', 'Biopsia por aspiración con aguja fina (BAAF)', 'Tomografía Axial Computarizada'],
                    answer: 'Biopsia por aspiración con aguja fina (BAAF)',
                    justification: 'La Biopsia por Aspiración con Aguja Fina (BAAF) es el método diagnóstico más preciso y rentable para evaluar los nódulos tiroideos. Permite clasificar los nódulos en categorías de riesgo de malignidad (Sistema Bethesda) y guiar el tratamiento subsecuente.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Cuál es la causa más frecuente de hipertiroidismo en Estados Unidos?',
                    options: ['Enfermedad de Graves', 'Bocio multinodular tóxico', 'Adenoma tóxico', 'Tiroiditis subaguda'],
                    answer: 'Enfermedad de Graves',
                    justification: 'La enfermedad de Graves, un trastorno autoinmunitario, es la causa más frecuente de hipertiroidismo, representando del 60 al 80% de los casos.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'Un resultado de BAAF clasificado como Bethesda II (Benigno) tiene un riesgo de malignidad de:',
                    options: ['0-3%', '5-10%', '15-30%', '50-60%'],
                    answer: '0-3%',
                    justification: 'Un resultado "benigno" (Bethesda II) tiene un riesgo de malignidad muy bajo, generalmente citado entre 0-3%. Sin embargo, el seguimiento clínico y ecográfico sigue siendo fundamental debido a la existencia de falsos negativos.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Qué estructura anatómica se utiliza como referencia para la operación de Sistrunk en un quiste tirogloso?',
                    options: ['El cartílago tiroides', 'El hueso hioides', 'El cartílago cricoides', 'La tráquea'],
                    answer: 'El hueso hioides',
                    justification: 'El tratamiento del quiste tirogloso es la operación de Sistrunk, que consiste en la cistectomía en bloque y la escisión de la parte central del hueso hioides para disminuir la probabilidad de recurrencia.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Cuál de las siguientes es una manifestación extratiroidea de la Enfermedad de Graves?',
                    options: ['Nefrolitiasis', 'Oftalmopatía', 'Artritis reumatoide', 'Úlcera péptica'],
                    answer: 'Oftalmopatía',
                    justification: 'La enfermedad de Graves se caracteriza por tirotoxicosis, bocio difuso y trastornos extratiroideos, entre ellos oftalmopatía y dermopatía (mixedema pretibial).',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'Un nódulo que no capta yodo radiactivo en una gammagrafía se denomina:',
                    options: ['Nódulo caliente', 'Nódulo tibio', 'Nódulo frío', 'Nódulo autónomo'],
                    answer: 'Nódulo frío',
                    justification: 'Las áreas que atrapan menos isótopo radiactivo que la glándula circundante se denominan frías. El riesgo de malignidad es mayor en las lesiones frías (20%) en comparación con las calientes (<5%).',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'El tratamiento de elección para la mayoría de los cánceres tiroideos diferenciados es:',
                    options: ['Lobectomía tiroidea', 'Tiroidectomía total o casi total', 'Yodo radiactivo únicamente', 'Quimioterapia'],
                    answer: 'Tiroidectomía total o casi total',
                    justification: 'La tiroidectomía total o casi total es el tratamiento quirúrgico de elección para la mayoría de los cánceres tiroideos, ya que los índices de complicación son bajos y permite el uso posterior de yodo radiactivo para ablación y seguimiento.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Qué nervio es crucial identificar y preservar durante la tiroidectomía para evitar la disfonía?',
                    options: ['Nervio vago', 'Nervio frénico', 'Nervio laríngeo recurrente', 'Nervio hipogloso'],
                    answer: 'Nervio laríngeo recurrente',
                    justification: 'La lesión del nervio laríngeo recurrente (RLN) causa parálisis de la cuerda vocal ipsolateral, lo que puede producir una voz ronca y tos ineficaz. Su identificación y preservación es un paso crítico en la cirugía tiroidea.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'El bocio multinodular tóxico aparece con mayor frecuencia en:',
                    options: ['Pacientes jóvenes (< 30 años)', 'Niños', 'Pacientes > 50 años', 'Adolescentes'],
                    answer: 'Pacientes > 50 años',
                    justification: 'El bocio multinodular tóxico casi siempre aparece en personas > 50 años de edad, a menudo con antecedente de un bocio multinodular no tóxico de larga evolución.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Qué es el signo de Pemberton?',
                    options: ['Un signo de hipocalcemia', 'Un signo de compresión venosa por bocio retroesternal', 'Un reflejo del nervio laríngeo', 'Un hallazgo en la oftalmopatía de Graves'],
                    answer: 'Un signo de compresión venosa por bocio retroesternal',
                    justification: 'La obstrucción del retorno venoso en la entrada torácica causada por un bocio retroesternal produce un signo de Pemberton positivo, que es la rubefacción facial y dilatación de las venas cervicales cuando se elevan los brazos sobre la cabeza.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                }
            ],
            completed: false
        },
        {
            id: 3,
            title: 'Diagnóstico en Patología Tiroidea',
            summary: 'La evaluación de la función tiroidea se realiza con pruebas como la TSH sérica, que es la más sensible para detectar hipo e hipertiroidismo. Las imágenes son cruciales: la ecografía es excelente para estudiar la morfología de los nódulos, mientras que la gammagrafía con radionúclidos (Yodo-123, Tc-99m) evalúa la funcionalidad, distinguiendo nódulos "fríos" (mayor riesgo de malignidad) de "calientes". La TAC y RMN son útiles para bocios grandes o retroesternales.',
            quiz: [
                {
                    question: '¿Cuál es la prueba de laboratorio más sensible y específica para el diagnóstico inicial de disfunción tiroidea?',
                    options: ['T4 Libre', 'T3 Total', 'TSH sérica', 'Tiroglobulina sérica'],
                    answer: 'TSH sérica',
                    justification: 'Las pruebas ultrasensibles para TSH se convirtieron en la opción más sensible y específica para el diagnóstico de hipertiroidismo e hipotiroidismo, debido a la relación inversa logarítmica con la T4 libre.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'En una gammagrafía tiroidea, un nódulo "caliente" indica:',
                    options: ['Alta probabilidad de cáncer', 'Baja probabilidad de cáncer', 'Ausencia de tejido tiroideo', 'Una lesión quística'],
                    answer: 'Baja probabilidad de cáncer',
                    justification: 'Las áreas que muestran un aumento de actividad se llaman calientes. El riesgo de malignidad es bajo (<5%) en comparación con las lesiones frías (20%).',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Para qué se utiliza principalmente la medición de Tiroglobulina sérica (Tg)?',
                    options: ['Diagnóstico inicial de hipotiroidismo', 'Diagnóstico de enfermedad de Graves', 'Vigilancia de recurrencia de cáncer tiroideo diferenciado', 'Diagnóstico de tiroiditis'],
                    answer: 'Vigilancia de recurrencia de cáncer tiroideo diferenciado',
                    justification: 'El uso más importante de las concentraciones de tiroglobulina sérica es en la vigilancia de los pacientes con cáncer tiroideo diferenciado a fin de detectar recurrencia, sobre todo después de tiroidectomía total.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'La ecografía de cuello es MÁS útil para:',
                    options: ['Evaluar la función hormonal de la tiroides', 'Distinguir entre nódulos sólidos y quísticos', 'Detectar metástasis óseas', 'Medir la captación de yodo'],
                    answer: 'Distinguir entre nódulos sólidos y quísticos',
                    justification: 'La ecografía es útil en la valoración de nódulos tiroideos, distinción entre nódulos sólidos y quísticos y obtención de información sobre el tamaño y multiplicidad de las lesiones.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Qué marcador tumoral es sensible para el cáncer medular de tiroides?',
                    options: ['TSH', 'Tiroglobulina', 'Calcitonina', 'Anti-TPO'],
                    answer: 'Calcitonina',
                    justification: 'La calcitonina sérica es un polipéptido producto de las células C y es un marcador sensible de cáncer tiroideo medular.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'Los anticuerpos Anti-TPO y Anti-Tg elevados sugieren principalmente:',
                    options: ['Cáncer papilar de tiroides', 'Una tiroiditis autoinmunitaria', 'Un adenoma tóxico', 'Deficiencia de yodo'],
                    answer: 'Una tiroiditis autoinmunitaria',
                    justification: 'Las concentraciones de anticuerpos anti-Tg y anti-TPO no determinan la función tiroidea, pero indican un trastorno subyacente, casi siempre una tiroiditis autoinmunitaria como la de Hashimoto.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Cuándo es más útil una Tomografía Computarizada (TAC) en la patología tiroidea?',
                    options: ['En todos los nódulos tiroideos pequeños', 'Para evaluar la función hormonal', 'Para valorar la extensión de bocios grandes o retroesternales', 'Como primera línea de diagnóstico en hipertiroidismo'],
                    answer: 'Para valorar la extensión de bocios grandes o retroesternales',
                    justification: 'La TAC es muy útil en la valoración de la extensión de grandes bocios fijos o retroesternales y su relación con la vía respiratoria y estructuras vasculares.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'El sistema de Bethesda para citología tiroidea se utiliza para clasificar los resultados de:',
                    options: ['Ecografía', 'Gammagrafía', 'BAAF', 'Análisis de sangre'],
                    answer: 'BAAF',
                    justification: 'El sistema de Bethesda clasifica las biopsias por aspiración con aguja fina (BAAF) en seis grupos con base en el riesgo de cáncer, estandarizando el reporte citológico.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Qué es la "tormenta tiroidea"?',
                    options: ['Una forma de hipotiroidismo severo', 'Una complicación común de la cirugía de paratiroides', 'Una alteración del hipertiroidismo con disfunción multiorgánica', 'Un tipo de cáncer de tiroides'],
                    answer: 'Una alteración del hipertiroidismo con disfunción multiorgánica',
                    justification: 'La tormenta tiroidea es una alteración del hipertiroidismo acompañado por fiebre, agitación, y disfunción cardiovascular y gastrointestinal, que puede ser precipitada por cirugía o infección en pacientes con tirotoxicosis no tratada.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Qué hallazgo en una BAAF de un nódulo tiroideo sugiere una neoplasia folicular?',
                    options: ['Presencia de coloide abundante', 'Células de Hürthle', 'Microfolículos y celularidad aumentada', 'Infiltrado linfocítico'],
                    answer: 'Microfolículos y celularidad aumentada',
                    justification: 'La categoría de "neoplasia folicular" en el sistema Bethesda se caracteriza por una población uniforme de células foliculares dispuestas en un patrón alterado, a menudo con microfolículos, y requiere una lobectomía para el diagnóstico definitivo.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                }
            ],
            completed: false
        },
        {
            id: 4,
            title: 'Tratamiento Quirúrgico de la Tiroides',
            summary: 'La cirugía de tiroides (tiroidectomía) es el tratamiento principal para el cáncer de tiroides, bocios grandes y algunos casos de hipertiroidismo. Las opciones van desde la lobectomía (extirpación de un lóbulo) hasta la tiroidectomía total. La preservación de las glándulas paratiroides y los nervios laríngeos recurrentes es de suma importancia para evitar complicaciones como la hipocalcemia y la disfonía.',
            quiz: [
                {
                    question: 'En la enfermedad de Graves, ¿cuándo se recomienda la cirugía sobre el yodo radiactivo?',
                    options: ['En todos los pacientes', 'En pacientes con bocios pequeños', 'En pacientes jóvenes, embarazadas o con nódulos sospechosos', 'Solo si el paciente es alérgico al yodo'],
                    answer: 'En pacientes jóvenes, embarazadas o con nódulos sospechosos',
                    justification: 'La cirugía se recomienda cuando el yodo radiactivo está contraindicado, como en embarazo, en personas jóvenes, o si existen nódulos sospechosos de malignidad o bocios grandes con síntomas compresivos.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Cuál es el objetivo de administrar solución de yodo de Lugol antes de una tiroidectomía por enfermedad de Graves?',
                    options: ['Aumentar la producción hormonal', 'Disminuir la vascularidad de la glándula', 'Tratar la oftalmopatía', 'Disolver los nódulos'],
                    answer: 'Disminuir la vascularidad de la glándula',
                    justification: 'Se administra yodo de Lugol o yoduro de potasio para disminuir la vascularidad de la glándula y reducir el riesgo de desencadenar una tormenta tiroidea durante la cirugía.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'La tiroidectomía subtotal para la enfermedad de Graves implica dejar un remanente de:',
                    options: ['Menos de 1g', 'Aproximadamente 4 a 7g', 'Más de 10g', 'No se deja remanente'],
                    answer: 'Aproximadamente 4 a 7g',
                    justification: 'En la tiroidectomía subtotal se recomienda dejar un remanente de 4 a 7g para intentar preservar la función tiroidea, aunque esto conlleva un riesgo de recurrencia del hipertiroidismo.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Cuál es el tratamiento de elección para un carcinoma folicular de tiroides?',
                    options: ['Observación', 'Lobectomía y seguimiento', 'Tiroidectomía total', 'Radioterapia externa'],
                    answer: 'Tiroidectomía total',
                    justification: 'Un diagnóstico de carcinoma folicular amerita que se complete la tiroidectomía total, sobre todo para poder usar Yodo-131 para detectar y eliminar metástasis.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'La complicación más temida de la lesión bilateral de los nervios laríngeos recurrentes es:',
                    options: ['Disfonía permanente', 'Obstrucción de la vía respiratoria', 'Tos ineficaz', 'Disfagia'],
                    answer: 'Obstrucción de la vía respiratoria',
                    justification: 'La lesión de ambos RLN puede ocasionar obstrucción de la vía respiratoria, lo que requiere traqueostomía de urgencia, ya que ambas cuerdas vocales pueden quedar en posición medial.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Qué es una disección de cuello central?',
                    options: ['Extirpación de la glándula parótida', 'Extirpación de los ganglios del Nivel VI', 'Extirpación de los ganglios de los niveles II, III y IV', 'Solo la extirpación del lóbulo piramidal'],
                    answer: 'Extirpación de los ganglios del Nivel VI',
                    justification: 'La disección de cuello central se refiere a la extirpación de los ganglios linfáticos pretraqueales, paratraqueales y del mediastino superior, correspondientes al Nivel VI.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: '¿Qué es la paratiromatosis?',
                    options: ['Un tipo de cáncer de paratiroides', 'La presencia de más de 4 glándulas paratiroides', 'Siembra de tejido paratiroideo en el cuello tras una cirugía', 'Una infección de las paratiroides'],
                    answer: 'Siembra de tejido paratiroideo en el cuello tras una cirugía',
                    justification: 'La paratiromatosis es una complicación rara donde tejido paratiroideo se disemina en el campo quirúrgico, usualmente por la ruptura de un adenoma, causando hiperparatiroidismo recurrente.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'El tratamiento del carcinoma anaplásico de tiroides generalmente es:',
                    options: ['Curativo con cirugía', 'Principalmente paliativo', 'Solo con yodo radiactivo', 'Con tiroidectomía total siempre'],
                    answer: 'Principalmente paliativo',
                    justification: 'El carcinoma anaplásico es una de las neoplasias más agresivas. Todas las formas terapéuticas han resultado decepcionantes y el tratamiento suele ser paliativo para controlar los síntomas locales.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Qué es un bocio intratorácico secundario?',
                    options: ['Un tumor originado en el timo', 'Tejido tiroideo ectópico en el tórax sin conexión con el cuello', 'Extensión descendente de un bocio cervical al mediastino', 'Metástasis de cáncer de tiroides al tórax'],
                    answer: 'Extensión descendente de un bocio cervical al mediastino',
                    justification: 'Casi todos los bocios mediastínicos son secundarios y provienen de la extensión descendente del tejido tiroideo cervical a lo largo de los planos aponeuróticos del cuello; su suministro sanguíneo procede de las arterias tiroideas.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'La tiroidectomía endoscópica o robótica se realiza principalmente para:',
                    options: ['Mejorar los resultados oncológicos', 'Reducir el tiempo quirúrgico', 'Evitar una cicatriz en el cuello', 'Tratar tumores más grandes'],
                    answer: 'Evitar una cicatriz en el cuello',
                    justification: 'Los accesos endoscópicos y robóticos (axilar, torácico, etc.) eliminan la incisión en la piel del cuello, pero son más invasivos. Su principal beneficio es estético.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                }
            ],
            completed: false
        },
        {
            id: 5,
            title: 'Patología Congénita del Cuello',
            summary: 'Las lesiones congénitas del cuello incluyen el quiste del conducto tirogloso, el quiste branquial y los linfangiomas (higromas quísticos). El quiste tirogloso es la anomalía cervical más frecuente y se presenta en la línea media. Los quistes branquiales derivan de la involución incompleta de los arcos branquiales. Los linfangiomas son malformaciones de los vasos linfáticos.',
            quiz: [
                {
                    question: '¿Cuál es la lesión congénita más frecuente de la línea media del cuello?',
                    options: ['Quiste branquial', 'Linfangioma', 'Quiste del conducto tirogloso', 'Hemangioma'],
                    answer: 'Quiste del conducto tirogloso',
                    justification: 'Los quistes del conducto tirogloso son las anomalías cervicales congénitas más frecuentes, resultado de la persistencia del conducto que guía el descenso de la tiroides.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'El tratamiento quirúrgico para un quiste tirogloso se conoce como:',
                    options: ['Disección radical de cuello', 'Parotidectomía', 'Operación de Sistrunk', 'Hemitiroidectomía'],
                    answer: 'Operación de Sistrunk',
                    justification: 'El tratamiento es la "operación de Sistrunk", que consiste en la cistectomía en bloque y escisión de la parte central del hueso hioides para minimizar la recurrencia.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: '¿De qué arco branquial derivan con mayor frecuencia los quistes y fístulas branquiales?',
                    options: ['Primer arco', 'Segundo arco', 'Tercer arco', 'Cuarto arco'],
                    answer: 'Segundo arco',
                    justification: 'Los derivados de la segunda bolsa branquial son los más comunes y se presentan como un quiste en el borde anterior del esternocleidomastoideo.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: 'Un linfangioma o higroma quístico es una malformación de los:',
                    options: ['Vasos arteriales', 'Vasos venosos', 'Vasos linfáticos', 'Nervios periféricos'],
                    answer: 'Vasos linfáticos',
                    justification: 'Los linfangiomas son tumores que se derivan de malformaciones de los vasos linfáticos y contienen líquido linfático.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: 'La tiroides lingual representa:',
                    options: ['Un tipo de cáncer', 'Una infección viral', 'La falta de descenso del primordio tiroideo', 'Una glándula tiroides accesoria'],
                    answer: 'La falta de descenso del primordio tiroideo',
                    justification: 'La presencia de una tiroides lingual representa la falta de descenso normal del primordio mediano tiroideo y es posible que sea el único tejido tiroideo presente.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Cuál es el estudio de imagen inicial de elección para un linfangioma?',
                    options: ['Radiografía simple', 'Tomografía (TAC)', 'Ultrasonografía', 'Arteriografía'],
                    answer: 'Ultrasonografía',
                    justification: 'En forma general, la ultrasonografía es el primer estudio solicitado para un linfangioma, ya que no supone el uso de radiación y aporta datos de la densidad, extensión y flujo vascular.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: 'Los quistes branquiales del primer arco se localizan típicamente cerca de:',
                    options: ['La clavícula', 'La glándula tiroides', 'La región periauricular y parotídea', 'El mediastino'],
                    answer: 'La región periauricular y parotídea',
                    justification: 'Los derivados de la primera bolsa son preauriculares, retroauriculares o periauriculares, y en ocasiones comprometen a la glándula parótida y al nervio facial.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: 'El síndrome de Kasabach-Merrit es una complicación de:',
                    options: ['Quiste tirogloso infectado', 'Hemangioma gigante', 'Linfangioma mediastínico', 'Quiste branquial'],
                    answer: 'Hemangioma gigante',
                    justification: 'Cuando un hemangioma presenta un crecimiento muy rápido puede producirse el síndrome de Kasabach-Merrit (coagulopatía trombocitopénica), una complicación grave.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: '¿Cuál es el tratamiento de elección para un quiste branquial no complicado?',
                    options: ['Antibióticos a largo plazo', 'Aspiración con aguja', 'Observación', 'Excisión quirúrgica completa'],
                    answer: 'Excisión quirúrgica completa',
                    justification: 'El único tratamiento para el control de esta enfermedad es la excisión completa de la malformación, idealmente cuando no hay un fenómeno inflamatorio activo.',
                    source: '95 y 96 Anatomía cuello y lesiones benignas Copiar.pdf'
                },
                {
                    question: 'En un quiste tirogloso, ¿qué estudio es mandatorio antes de la cirugía?',
                    options: ['Endoscopia laríngea', 'Biopsia por aspiración', 'Gammagrafía o ecografía tiroidea', 'Fistulografía'],
                    answer: 'Gammagrafía o ecografía tiroidea',
                    justification: 'Es crucial realizar una gammagrafía o ecografía para documentar la presencia de tejido tiroideo normal en el cuello, ya que en 1% de los casos, el quiste puede contener el único tejido tiroideo funcional del paciente.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                }
            ],
            completed: false
        },
        {
            id: 6,
            title: 'Glándulas Paratiroides',
            summary: 'Las glándulas paratiroides regulan la homeostasis del calcio mediante la secreción de la hormona paratiroidea (PTH). El hiperparatiroidismo primario, usualmente causado por un adenoma, lleva a hipercalcemia. El diagnóstico se confirma con niveles elevados de calcio y PTH. La cirugía (paratiroidectomía) es el único tratamiento curativo.',
            quiz: [
                {
                    question: '¿Cuál es la causa más común de hiperparatiroidismo primario (HPP)?',
                    options: ['Adenoma paratiroideo único', 'Hiperplasia de las 4 glándulas', 'Carcinoma de paratiroides', 'Adenomas dobles'],
                    answer: 'Adenoma paratiroideo único',
                    justification: 'El hiperparatiroidismo primario se debe al crecimiento de una sola glándula o adenoma paratiroideo en casi 80% de los casos.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'La hormona paratiroidea (PTH) aumenta los niveles de calcio en sangre mediante todas las siguientes acciones EXCEPTO:',
                    options: ['Aumentando la resorción ósea', 'Aumentando la excreción renal de calcio', 'Aumentando la reabsorción renal de calcio', 'Aumentando la producción de vitamina D activa'],
                    answer: 'Aumentando la excreción renal de calcio',
                    justification: 'La PTH aumenta el calcio sérico al incrementar la resorción ósea, aumentar la reabsorción de calcio en el riñón e incrementar la producción de 1,25-dihidroxivitamina D, que a su vez aumenta la absorción intestinal de calcio. La PTH disminuye la excreción renal de calcio.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Cuál es el único tratamiento curativo para el hiperparatiroidismo primario?',
                    options: ['Bifosfonatos', 'Vitamina D', 'Cirugía (paratiroidectomía)', 'Calciomiméticos'],
                    answer: 'Cirugía (paratiroidectomía)',
                    justification: 'La paratiroidectomía es la única opción terapéutica curativa para el HPP, con índices de éxito >95% en manos expertas.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'El hiperparatiroidismo secundario es una complicación común de:',
                    options: ['Enfermedad de Graves', 'Insuficiencia renal crónica', 'Cáncer de pulmón', 'Diabetes tipo 1'],
                    answer: 'Insuficiencia renal crónica',
                    justification: 'El hiperparatiroidismo secundario es una reacción compensatoria a estados hipocalcémicos, siendo la causa más común la insuficiencia renal crónica.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Qué síndrome genético se asocia con hiperparatiroidismo, tumores pancreáticos y adenomas hipofisarios?',
                    options: ['MEN1', 'MEN2A', 'MEN2B', 'Enfermedad de von Hippel-Lindau'],
                    answer: 'MEN1',
                    justification: 'El hiperparatiroidismo primario es la manifestación más frecuente de la Neoplasia Endocrina Múltiple tipo 1 (MEN1), que también incluye tumores neuroendocrinos pancreáticos y adenomas hipofisarios.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'La "crisis hipercalcémica" es una urgencia médica caracterizada por:',
                    options: ['Hipocalcemia severa y tetania', 'Hipercalcemia severa con alteración del estado mental', 'Niveles de PTH muy bajos', 'Cálculos renales bilaterales'],
                    answer: 'Hipercalcemia severa con alteración del estado mental',
                    justification: 'La crisis hipercalcémica es un cuadro agudo con náusea, vómito, fatiga, confusión y disminución del nivel de conciencia, debido a hipercalcemia grave por secreción descontrolada de PTH.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Qué estudio de imagen es más útil para localizar un adenoma paratiroideo antes de una cirugía de mínima invasión?',
                    options: ['Radiografía de cuello', 'TAC de cuello', 'Gammagrafía con Sestamibi y Ecografía', 'Angiografía'],
                    answer: 'Gammagrafía con Sestamibi y Ecografía',
                    justification: 'La combinación de gammagrafía con sestamibi-Tc99 y ecografía cervical ha demostrado la mayor sensibilidad para la localización preoperatoria de adenomas paratiroideos.',
                    source: 'Capítulo 104 Patología quirúrgica de las glándulas paratiroides'
                },
                {
                    question: 'El "hueso hambriento" (hungry bone syndrome) es una complicación postoperatoria caracterizada por:',
                    options: ['Hipercalcemia persistente', 'Hipocalcemia profunda y prolongada', 'Hiperfosfatemia', 'Fracturas patológicas'],
                    answer: 'Hipocalcemia profunda y prolongada',
                    justification: 'Después de una paratiroidectomía exitosa, especialmente en pacientes con enfermedad ósea severa, puede ocurrir el síndrome de "hueso hambriento", que es una hipocalcemia severa por la rápida captación de calcio por el esqueleto.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: 'Las glándulas paratiroides superiores se originan embriológicamente de:',
                    options: ['El primer arco branquial', 'El segundo arco branquial', 'La tercera bolsa faríngea', 'La cuarta bolsa faríngea'],
                    answer: 'La cuarta bolsa faríngea',
                    justification: 'Las glándulas paratiroides superiores provienen de la cuarta bolsa faríngea, mientras que las inferiores (junto con el timo) provienen de la tercera.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                },
                {
                    question: '¿Cuál es el tratamiento inicial de una crisis hipercalcémica?',
                    options: ['Cirugía de emergencia', 'Hemodiálisis', 'Rehidratación agresiva con solución salina', 'Administración de bifosfonatos'],
                    answer: 'Rehidratación agresiva con solución salina',
                    justification: 'La base del tratamiento de la crisis hipercalcémica es la rehidratación con solución salina al 0.9% para mantener un gasto urinario >100 ml/h, seguido de diuresis con furosemida.',
                    source: 'Schwartz. Tiroides, paratiroides y suprarrenal.pdf'
                }
            ],
            completed: false
        },
        {
            id: 7,
            title: 'Generalidades de Laringe',
            summary: 'La laringe es un órgano complejo responsable de la fonación, la respiración y la protección de la vía aérea. Se divide en supraglotis, glotis y subglotis. La patología laríngea benigna incluye nódulos, pólipos y granulomas, usualmente por abuso vocal o reflujo. La maligna es predominantemente carcinoma epidermoide, fuertemente asociado al tabaco y alcohol. El síntoma principal de patología glótica es la disfonía.',
            quiz: [
                {
                    question: '¿Cuál es el síntoma más común de un tumor en las cuerdas vocales verdaderas (glotis)?',
                    options: ['Disfagia', 'Dolor', 'Disfonía (ronquera)', 'Obstrucción respiratoria'],
                    answer: 'Disfonía (ronquera)',
                    justification: 'En los pacientes con neoplasias de la glotis, un síntoma temprano es la ronquera. La alteración de la voz es el signo cardinal de la patología glótica.',
                    source: 'Schwartz. Trastornos de cabeza y cuello.pdf'
                },
                {
                    question: 'La papilomatosis respiratoria recurrente es causada por:',
                    options: ['Virus de Epstein-Barr', 'Virus del papiloma humano (VPH)', 'Tabaquismo crónico', 'Reflujo laringofaríngeo'],
                    answer: 'Virus del papiloma humano (VPH)',
                    justification: 'La papilomatosis respiratoria recurrente se refiere a la invasión del epitelio por el virus del papiloma humano (HPV), siendo los subtipos 6 y 11 los más comunes.',
                    source: 'Schwartz. Trastornos de cabeza y cuello.pdf'
                },
                {
                    question: 'Los nódulos de las cuerdas vocales ("nódulos del cantante") son causados típicamente por:',
                    options: ['Infección viral', 'Una reacción alérgica', 'Abuso o mal uso crónico de la voz', 'Exposición a toxinas'],
                    answer: 'Abuso o mal uso crónico de la voz',
                    justification: 'Los nódulos vocales son lesiones bilaterales y simétricas que resultan del trauma fonatorio repetido o abuso vocal, localizados en la unión de los tercios anterior y medio de las cuerdas vocales.',
                    source: 'Schwartz. Trastornos de cabeza y cuello.pdf'
                },
                {
                    question: '¿Cuál es el principal factor de riesgo para el carcinoma epidermoide de laringe?',
                    options: ['Infección por VPH', 'Consumo de tabaco y alcohol', 'Dieta alta en grasas', 'Exposición a asbestos'],
                    answer: 'Consumo de tabaco y alcohol',
                    justification: 'El abuso concurrente de tabaco y alcohol tiene un efecto sinérgico para elevar el riesgo de desarrollar cáncer de cabeza y cuello, incluyendo la laringe.',
                    source: 'Schwartz. Trastornos de cabeza y cuello.pdf'
                },
                {
                    question: 'La laringectomía supraglótica es un procedimiento de conservación de órgano que extirpa:',
                    options: ['Toda la laringe', 'Solo una cuerda vocal', 'La laringe por encima de las cuerdas vocales verdaderas', 'La laringe por debajo de las cuerdas vocales'],
                    answer: 'La laringe por encima de las cuerdas vocales verdaderas',
                    justification: 'La laringectomía supraglótica implica la resección de las estructuras por encima de la glotis (epiglotis, cuerdas falsas), preservando las cuerdas vocales verdaderas para mantener la fonación.',
                    source: 'Schwartz. Trastornos de cabeza y cuello.pdf'
                },
                {
                    question: 'El edema de Reinke (corditis polipoide) se asocia fuertemente con:',
                    options: ['Ser mujer', 'Tabaquismo crónico', 'Ser cantante de ópera', 'Tener menos de 20 años'],
                    answer: 'Tabaquismo crónico',
                    justification: 'Casi todos los pacientes con edema de Reinke son fumadores crónicos. Es una inflamación gelatinosa de la lámina propia superficial de las cuerdas vocales.',
                    source: 'Schwartz. Trastornos de cabeza y cuello.pdf'
                },
                {
                    question: 'Una laringectomía total resulta en:',
                    options: ['Pérdida permanente de la voz y necesidad de una alternativa para hablar', 'Mejora de la calidad de la voz', 'Una traqueostomía temporal', 'No afecta la respiración'],
                    answer: 'Pérdida permanente de la voz y necesidad de una alternativa para hablar',
                    justification: 'La laringectomía total implica la extirpación de toda la caja de la voz, resultando en la pérdida de la fonación natural y la creación de una traqueostomía permanente para respirar.',
                    source: 'Schwartz. Trastornos de cabeza y cuello.pdf'
                },
                {
                    question: '¿Qué es la leucoplaquia laríngea?',
                    options: ['Una infección por hongos', 'Un tipo de cáncer invasivo', 'Una placa blanca en la cuerda vocal que puede ser precancerosa', 'Un pólipo hemorrágico'],
                    answer: 'Una placa blanca en la cuerda vocal que puede ser precancerosa',
                    justification: 'La leucoplaquia es una placa blanca que no puede desprenderse. Puede representar desde hiperplasia benigna hasta carcinoma invasivo, y requiere biopsia para un diagnóstico definitivo.',
                    source: 'Schwartz. Trastornos de cabeza y cuello.pdf'
                },
                {
                    question: 'La principal función de la epiglotis es:',
                    options: ['Producir el sonido', 'Proteger la vía aérea durante la deglución', 'Calentar el aire inspirado', 'Detectar olores'],
                    answer: 'Proteger la vía aérea durante la deglución',
                    justification: 'La epiglotis es un cartílago flexible que se pliega hacia atrás para cubrir la entrada de la laringe durante la deglución, evitando que los alimentos y líquidos entren en la tráquea.',
                    source: 'Schwartz. Trastornos de cabeza y cuello.pdf'
                },
                {
                    question: 'El tratamiento inicial para nódulos vocales pequeños es típicamente:',
                    options: ['Cirugía láser', 'Radioterapia', 'Terapia de la voz y manejo del reflujo', 'Inyección de esteroides'],
                    answer: 'Terapia de la voz y manejo del reflujo',
                    justification: 'El tratamiento para los nódulos vocales se enfoca en corregir el comportamiento fonatorio. La terapia de la voz es la piedra angular del manejo, a menudo combinada con tratamiento antirreflujo.',
                    source: 'Schwartz. Trastornos de cabeza y cuello.pdf'
                }
            ],
            completed: false
        }
    ];

    const moduleMenu = document.getElementById('module-menu');
    const contentArea = document.getElementById('content-area');
    const progressBar = document.getElementById('progressBar');

    function updateProgress() {
        const completedModules = modules.filter(m => m.completed).length;
        const progressPercentage = (completedModules / modules.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.textContent = `${Math.round(progressPercentage)}%`;
    }

    function loadModule(moduleId) {
        const module = modules.find(m => m.id === moduleId);
        if (!module) return;

        document.querySelectorAll('#module-menu li').forEach(li => {
            li.classList.remove('active');
            if (parseInt(li.dataset.id) === moduleId) {
                li.classList.add('active');
            }
        });

        let contentHTML = `<div class="summary"><h2>Resumen: ${module.title}</h2><p>${module.summary}</p></div>`;

        if (module.quiz.length > 0) {
            contentHTML += `
                <div class="quiz-container">
                    <h2>Test de Autoevaluación</h2>
                    <form id="quiz-form">
                        ${module.quiz.map((q, index) => `
                            <div class="quiz-question">
                                <p>${index + 1}. ${q.question}</p>
                                <ul class="quiz-options">
                                    ${q.options.map(opt => `
                                        <li>
                                            <label>
                                                <input type="radio" name="question${index}" value="${opt}">
                                                ${opt}
                                            </label>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        `).join('')}
                        <button type="submit" id="submit-quiz">Enviar Respuestas</button>
                    </form>
                    <div id="quiz-results"></div>
                </div>
            `;
        }
        contentArea.innerHTML = contentHTML;

        if (module.quiz.length > 0) {
            const quizForm = document.getElementById('quiz-form');
            quizForm.addEventListener('submit', (e) => {
                e.preventDefault();
                showResults(module);
            });
        }
    }

    function showResults(module) {
        const form = document.getElementById('quiz-form');
        const resultsDiv = document.getElementById('quiz-results');
        let correctAnswers = 0;
        let resultsHTML = '<h3>Resultados:</h3>';

        module.quiz.forEach((q, index) => {
            const formData = new FormData(form);
            const userAnswer = formData.get(`question${index}`);
            const isCorrect = userAnswer === q.answer;

            if (isCorrect) {
                correctAnswers++;
            }

            resultsHTML += `
                <div class="justification ${isCorrect ? 'correct' : 'incorrect'}">
                    <p><strong>Pregunta ${index + 1}:</strong> ${q.question}</p>
                    <p><strong>Tu respuesta:</strong> ${userAnswer || 'No respondida'}</p>
                    <p><strong>Respuesta correcta:</strong> ${q.answer}</p>
                    <p><strong>Justificación:</strong> ${q.justification}</p>
                    <p class="source">Fuente: ${q.source}</p>
                </div>
            `;
        });

        const score = (correctAnswers / module.quiz.length) * 100;
        resultsHTML = `<h3>Obtuviste ${correctAnswers} de ${module.quiz.length} (${score.toFixed(2)}%)</h3>` + resultsHTML;
        resultsDiv.innerHTML = resultsHTML;

        if (score >= 80) { 
            module.completed = true;
            updateProgress();
        }
    }

    modules.forEach(module => {
        const li = document.createElement('li');
        li.textContent = module.title;
        li.dataset.id = module.id;
        li.addEventListener('click', () => loadModule(module.id));
        moduleMenu.appendChild(li);
    });

    updateProgress();
});
