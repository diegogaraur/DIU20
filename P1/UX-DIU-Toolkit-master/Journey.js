/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Kevin Hernandez",
                Photo: "kevin.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje para desconectar de la universidad en verano",
                touch1: "Ordenador",
                feel1: "4",
                con1: "Apenas tiene tiempo para organizar el viaje",
                ima1: "cartoon-thinking.png",
    
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet destinos baratos, que no esten muy concurridos y que tengan la posibilidad de ir en grupos",
                touch2: "movil",
                feel2: "2",
                con2: "Hay pocos destinos que el considere tranquilos a un precio que pueda pagar",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar un viaje en grupo de gente de su edad",
                touch3: "móvil",
                feel3: "3",
                con3: "Esta confuso por que no sabe si va a encajar en ese tipo de actividad",
                ima3: "cartoon-why.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "su madre le recomiendan usar travello",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar opciones en un lugar tranquilo y con buena comunicacion",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se enamora de una de las opciones que ha visto en la aplicacion y ademas es con un grupo de estudiantes",
                touch5: "móvil ",
                feel5: "3",
                con5: "No tiene dinero en ese momento para pagarlo",
                ima5: "cartoon-PCSurprised.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar, piediendole dinero a su madre",
                touch6: "ordenador",
                feel6: "5",
                con6: "Tiene que devolverle el dinero a su madre lo antes posible",
                ima6: "cartoon-happy.png",
                
            },
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Alejandro Díaz",
                Photo: "alejandro.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Tiene ganas de ir al parque de atracciones de Sevilla.",
                touch1: "Ninguno",
                feel1: "1",
                con1: "A sus amigos no les gustan los parques de atracciones.",
                ima1: "cartoon-sad.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet los precios y son un poco más altos de lo que se esperaba.",
                touch2: "Ordenador (buscador web)",
                feel2: "3",
                con2: "Hay descuentos para poder ahorrarse dinero y descubre que hay descuentos para grupos de 5 personas, pero sus amigos no van.",
                ima2: "cartoon-PChard.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide buscar alguna página en la que haya gente que quiera ir al parque de atracciones de Sevilla.",
                touch3: "Ordenador (buscador web)",
                feel3: "2",
                con3: "Hay pocas páginas en las que mirar y los comentarios muy antiguos.",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Una compañera de trabajo le recomienda Travello donde podrá encontrar gente con gustos similares e apuntarte a experiencias.",
                touch4: "Hablado",
                feel4: "4",
                con4: "Agradece que le sugiera la aplicación, pero duda que pueda encontrar algo ahí pero le echará un ojo.",
                ima4: "cartoon-speaking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Se descarga la app, se registra y empieza a ver que hay gente con gustos similares y que también quieren ir a parques de atracciones.",
                touch5: "Móvil (Travello)",
                feel5: "5",
                con5: "No le resulta del todo intuitiva la aplicación, pero no está disgustado.",
                ima5: "cartoon-phone.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue formar un grupo de 5 personas y le aplican el descuento deseado y además no irá solo al parque de atracciones de Sevilla.",
                touch6: "Ordenador (Compra entradas parque de atraccioness)",
                feel6: "5",
                con6: "Perderá dinero que necesita",
                ima6: "cartoon-happy.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



