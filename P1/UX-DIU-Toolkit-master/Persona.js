/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
				Id: 0,
				Name: "Kevin Hernandez",
				Photo: "kevin.jpg",
				Quote: "La cabra siempre tira al monte.",
				Age: 19,
				Occupation: "Estudiante",
				Family: "Soltero",
				Location: "Jaén (Cabra del Santo Cristo)",
				Character: "Potenciar los logros.",
				PersonalityTraits: [
				{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
				{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3},
				{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
				{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Disfrutar del tiempo libre, viajar", "Terminar su formación",],
				Frustrations: ["No tiene amigos en la universidad"],
				Bio: "Es de Jaén, estudia en Granada matemáticas. Le encanta conocer gente nueva pero es muy timido",
				Tech: [
				{ Name: "TIC/Internet", Value: 3 },
				{ Name: "Movil", Value: 4 },
				{ Name: "RRSS", Value: 5 },
				{ Name: "Software", Value: 2 }
				
				], 
							Contextos: "Está muy agobiado por culpa de los examenes de Junio y quiere viajar cuando acabe los examenes para despejarse. El inconveniente es que quiere ir acompañado ya que en Granada suele sentirse muy solo",  
				PreferredChannels: [
				{ Name: "Publicidad Tradicional", Value: 3 },
				{ Name: "Online & Social Media", Value: 4 },
				{ Name: "Recomendaciones & sugerencias", Value: 4 },
				{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},

				/*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
            {
				Id: 1,
				Name: "Alejandro Díaz",
				Photo: "alejandro.jpg",
				Quote: "No es más rico quien más tiene sino el que menos necesita",
				Age: 34,
				Occupation: "Reponedor en Carrefour",
				Family: "Soltero desde hace 6 meses",
				Location: "Murcia (Alcantarilla)",
				Character: "Viajar más a partir de ahora y conocer gente nueva.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Olvidarse de su expareja viajando y conocer gente", "Encontrar un trabajo en el que le paguen más."],
				Frustrations: ["Le gusta viajar, pero no gana lo suficiente como para permitirselo más a menudo	"],
				Bio: "Es una persona que vive en su pueblo en el cual viven otros familiares. Tiene estudios básicos, pero no sabe idiomas. Tabaja en Carrefour, pero ayuda económicamente a su madre. ",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "Tras la ruptura con su pareja y haberlo pasado mal, quiere hacer un viaje a Sevilla y no quiere pasar el viaje solo, por lo que quiere encontrar que alguien vaya con él o relacionarse con gente allí.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}   
		];
		$scope.model = $scope.Personas[0];

	}])