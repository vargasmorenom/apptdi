import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DerechosService {

  public derechos:any = Array<{es:Array<{titulo:String,conten1:String,conten2: String,conten3: String,conten4: String,conten5: String}>}>;

  constructor() {
    this.derechos=[{
      es:[
          {titulo:'EXENCION DE RESPONSABILIDAD',
          conten1:'Esta aplicación no pretende hacer recomendaciones ni promesas sobre resultados y/o ganancias potencialmente generadas. Esta aplicación pretende ayudar a formar al usuario en inversión y apoyar el proceso de análisis y contar con más elementos de juicio que puedan presentar alternativas para la toma de decisiones en la gestión de inversiones de capital en los mercados financieros. Pero la ejecución final de decidir es realizada por el usuario de la AppTDI©, y los resultados se salen del alcance del autor y/o programador de la AppTDI©. Las posibles opciones o alternativas que presente la aplicación en ciertas circunstancias del mercado, pueden ser afectadas o alteradas por un sin número de cuestiones externas o ajenas incluso para el usuario de la misma. Noticias Falsas, manipulación de información privilegiada, ataques  terroristas, falta de liquidez, entre otros eventos, que puedan alterar el comportamiento de los mercados financieros mundiales. Y por lo cual los análisis arrojados durante el uso de la aplicación sean inútiles o sin ningún valor, lo cual exime y libera al autor de cualquier responsabilidad por los resultados de lo que pueda suceder con el capital, dinero, portafolios o cualquier activo que se decida gestionar haciendo uso de la AppTDI©.',
          conten2:'No debe asumirse que los métodos, técnicas o indicadores presentados en esta App o Herramienta serán lucrativos o que no resultarán en pérdidas. Los resultados que pueda arrojar la AppTDI©,  no son indicativo de resultados futuros, definitivos o contundentes. Los ejemplos  de posibles alternativas o posibles decisiones presentados en esta AppTDI©,  son solo con propósitos formativos y educativos Y NO DE NINGUNA GARANTIA DE GANANCIAS POTENCIALES. Estas no son una solicitud de órdenes de compra o venta.',
          conten3:'El usuario libera y exonera al autor de la AppTDI©, por cualquier responsabilidad en el uso de la aplicación de una manera responsable, irresponsable, equivocada o indebida. Algunos de los términos y abreviaturas utilizados son de conocimiento e información general de la teoría del análisis técnico, de los mercados financieros y de otros actores importantes de la industria. Pero que han sido transformados en conocimiento aplicado y puesto al servicio del público para el beneficio general de las personas que decidan voluntariamente adquirir y hacer uso de la AppTDI©. ',
          conten4:'Los autores y el programador no asumen la responsabilidad por acciones tomadas por los usuarios/clientes de la AppTDI©.  Los autores y el programador no realizan afirmaciones, promesas o garantías de que cualquier sugerencia, sistema de negociación, estrategia, o información resultará en una ganancia, pérdida u otro resultado deseado. Los clientes y usuarios de la AppTDI© asumen todo el riesgo, incluyendo los riesgos de pérdidas monetarias en las negociaciones que decidan efectuar. La negociación activa intra-día puede resultar en grandes pérdidas y puede no ser una actividad apropiada para todas las personas.',
          conten5:'*El cliente acepta que entiende y ha leído el LIABILITY DISCLAIMER o EXENCIÓN DE RESPONSABILIDAD. Por lo cual acepta realizar un único pago sin derecho a devolución de dinero, dado que, la arquitectura de esta Aplicación; AppTDI©. Esta realizada para que funcione SIN CONEXIÓN A INTERNET. Por lo tanto, NO UTILIZA CÓDIGOS INVASIVOS, NI COMPARTE INFORMACIÓN CON OTRAS EMPRESAS O AGENCIAS DE MERCADEO, ni permite Pop Ups Publicitarios de ningún tipo. Debido a esto la AppTDI© no requiere actualizaciones permanentes, ni se encuentra anclada a ningún servidor que pueda generar sonidos, bloqueos, virus o desconexiones porque no necesita estar conectada a Internet que puedan generar un mal funcionamiento.'},

        ],
      }];
  }
}
