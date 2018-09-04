/**
* Translations 
*/
const messages = {
	'fr': {
		nav: {
			home: 'home',
			collectivity: 'collectivités',
			operators: 'exploitants',
			passenger: 'voyageurs',
			blog: 'blog',
			team: 'équipe',
			contact: 'contact'
		},
		homepage: {
			catchphrase: {
				appstore: {
					downloadIn: 'Télécharger dans',
					appstore: 'l\'App Store'
				},
				playstore: {
					downloadIn: 'Disponible sur',
					playstore: 'Play Store'
				},
				title: 'Transformer la mobilité',
				text: 'Zenbus est une solution simple pour localiser les transports collectifs. Au quotidien, nous aidons les collectivités, les exploitants et les voyageurs grâce à des données de qualité.'
			},
			map: {
				tile: {
					title: 'Zenbus près de chez vous',
					text: 'Zenbus couvre déjà des dizaines de réseaux en France et ce sont chaque mois de nouvelles lignes de bus qui bénéficient du service. L\'application se déploie aussi progressivement à l\'étranger.',
					button: 'Voir la carte des réseaux'
				},
				mapexpand: {
					title: 'Carte',
					text: 'Vous pouvez filtrer la carte par typologie de réseau',
					item: '',
					placeholder: 'Rechercher un réseau',
					filterprefix: "Sauf",
					label: 'Aucun réseau ne correspond aux types sélectionnés | Un réseau disponible dans | {count} réseaux disponibles dans',
					label2: ' | une ville | {count} villes',
					prive: 'Privé',
					iconAlt: 'logo du réseau',
					privateCode: {
						error:'Code incorrect!',
						label: 'Code réseau privé',
						button: 'Valider',
						placeholder: 'Code du réseau'
					},
					types: {
						1: "Urbain",
						2: "Interurbain",
						4: "Entreprise",
						8: "Scolaire",
						16: "Evénementiel",
						32: "Audit",
						64: "Station de ski",
						128: "Travaux",
						256: "Marche à blanc"
					}
				}
			},
			vision: {
				tile: {
					title: 'Faciliter votre quotidien',
					text: 'Grâce à ses algorithmes performants et sa plate-forme Cloud, Zenbus produit et diffuse des données utiles à tous les acteurs du transport collectif.'
				},
				container: {
					collectivity: {
						title: 'Collectivité',
						item1: 'Suivi de l\'offre',
						item2: 'Valorisation du réseau',
						item3: 'Intégration simple'
					},
					operator: {
						title: 'Exploitant',
						item1: 'Suivi temps-réel',
						item2: 'Rejeu complet',
						item3: 'Données statistiques'
					},
					passenger: {
						title: 'Voyageur',
						item1: 'Vision en temps réel',
						item2: 'Informations instantanées',
						item3: 'Application gratuite'
					},
					driver: {
						title: 'Conducteur',
						item1: 'Prise de service simple',
						item2: 'Meilleur accueil',
						item3: 'Coordination facilitée'
					}
				}
			},
			products: {
				tile: {
					title: 'Des interfaces adaptées',
					text: 'Chacun dispose d\'applications distinctes avec une ergonomie pensée pour une utilisation efficace et sans contraintes.'
				},
				container: {
					product1: {
						title: 'Application Conducteur',
						text: 'Les conducteurs se connectent en toute simplicité à leur application Zenbus via leur smartphone'
					},
					product2: {
						title: 'Application Voyageur',
						text: 'Pour les voyageurs, l\’application, accessible à tous et gratuite, permet de visualiser leurs bus de manière inédite.'
					},
					product3: {
						title: 'TAD',
						text: 'La ligne de bus se déclenche à la demande ? Les voyageurs pourront réserver leur course directement sur Zenbus !'
					},
					product4: {
						title: 'Supervision Live',
						text: 'Pour les exploitants, des interfaces de supervision pour contrôler en temps-réel l\'état du réseau de transport et faciliter la prise de décision'
					},
					product5: {
						title: 'Supervision a posteriori',
						text: 'Des interfaces pour analyser et s\'assurer a posteriori du bon fonctionnement de l\'offre de transport'
					}
				}
			},
			statistics: {
				tile:{
					title: 'Le saviez-vous ?',
					text: 'Depuis sa création, Zenbus  collecte de nombreuses données de mobilité dont voici quelques illustrations parfois surprenantes !'
				},
				container: {
					km: 'kilomètres parcourus depuis le lancement de Zenbus',
					stat1: 'ulcères évités',
					stat2: 'de rendez-vous ratés',
					stat3: 'réseaux déployés',
					stat4: 'arrêts desservis'
				}
			},
			classic: {
				tile:{
					title: 'Ecrivez-nous !',
					text:'Nous sommes là pour répondre à tous vos messages, qu\'ils soient techniques, fonctionnels ou informatifs. On accepte même les déclarations enflammées^^'
				},
				form: {
					helloMyNameIs:'Bonjour, je m\'appelle',
					andIAm:'et je suis',
					option0:'curieux',
					option1:'un voyageur',
					option2:'une AO',
					option3:'un exploitant',
					iAmWritingToYouBecause:'Je vous écris car',
					canYouAnswerTo:'Pouvez-vous me répondre à l\'adresse',
					rgpd:'En soumettant ce formulaire, vous acceptez que les informations saisies soient utilisées pour répondre à votre demande.',
					submit:'Envoyer',
					placeholders:{
						firstname:'Lucien',
						lastname:'Bramard',
						message:'je souhaiterais savoir comment est votre blanquette ?',
						email:'agent.117@zenbus.fr'
					}
				}
			},
			footer: {
				social: {
					title:'Suivez-nous'
				},
				subscribe: {
					title: 'Restez informés',
					text: 'En renseignant votre adresse email, vous acceptez de recevoir nos dernières nouveautés par courrier électronique et vous prenez connaissance de notre ',
					link: 'politique de confidentialité',
					placeholder: 'Email'
				},
				contact: {
					title: 'Contact'
				},
				links: {
					title: 'ZENBUS',
					link1: 'Presse',
					link2: 'Recrutement',
					link3: 'CGU',
					link4: 'FAQ',
					link5: 'Données Zenbus',
					link6: 'Mentions légales'
				},
				copyrights: '© Zenbus 2018, tous droits réservés'
			}
		},
		errors: {
			email: 'Un email valide est requis.',
			rgpd: 'Pour soumettre le formulaire, vous devez cocher la case ci-dessus.'
		}
	},
	'en': {
		nav: {
			home: 'Home',
			collectivity: 'Local Authorities',
			operators: 'Transport Operators',
			passenger: 'Passengers',
			blog: 'Blog',
			team: 'Team',
			contact: 'Contact'
		},
		homepage: {
			catchphrase: {
				appstore: {
					downloadIn: 'Download in',
					appstore: 'the App Store '
				},
				playstore: {
					downloadIn: 'Available in',
					playstore: 'the Play Store'
				},
				title: 'Mobility transformed',
				text: 'Zenbus is a simple tool designed to locate public transport solutions. We provide daily assistance to local authorities, transport operators and passengers by exploiting high-quality data.'
			},
			map: {
				tile: {
					title: 'Zenbus near you',
					text: 'Zenbus already covers dozens of transport networks in France and new bus routes are added to this service every month. The application is also gradually being rolled out abroad.',
					button: 'View the networks map'
				},
				mapexpand: {
					title: 'Map',
					text: 'You can filter the map by type of network ',
					item: '',
					placeholder: 'Network search',
					filterprefix: "Except",
					label: 'No networks match the types selected  | one network available in | {count} networks available in',
					label2: ' | one  city | {count} cities',
					prive: 'Private',
					iconAlt: 'network logo',
					privateCode: {
						error:'The code entered is incorrect!',
						label: 'Private network code',
						button: 'Confirm',
						placeholder: 'Private network code'
					},
					types: {
						1: "City",
						2: "Intercity",
						4: "Company",
						8: "School",
						16: "Event-based",
						32: "Audit",
						64: "Ski resort",
						128: "Works",
						256: "Clear-cut"
					}
				}
				
			},
			vision: {
				tile: {
					title: 'Making your everyday life easier',
					text: 'Thanks to its high-performance algorithms and Cloud platform, Zenbus produces and publishes data that can be advantageously used by all stakeholders in the public transport sector.'
				},
				container: {
					collectivity: {
						title: 'Local authorities',
						item1: 'Updated transport offer',
						item2: 'Added value for the network',
						item3: 'Easy integration'
					},
					operator: {
						title: 'Operator',
						item1: 'Real-time updates',
						item2: 'Full playback',
						item3: 'Statistics'
					},
					passenger: {
						title: 'Passenger',
						item1: 'Real-time overview',
						item2: 'Information instantly available',
						item3: 'Free app'
					},
					driver: {
						title: 'Driver',
						item1: 'Simple start of shift',
						item2: 'Improved welcome',
						item3: 'Easy coordination'
					}
				}
			},
			products: {
				tile: {
					title: 'Customised interfaces',
					text: 'Each stakeholder has different apps ergonomically designed for effective and unrestricted use.'
				},
				container: {
					product1: {
						title: 'Driver app',
						text: 'Drivers simply connect to the Zenbus app on their smartphone.'
					},
					product2: {
						title: 'Passenger app',
						text: 'The app is available to all passengers free of charge, and is used to view their buses in an entirely new way.'
					},
					product3: {
						title: 'Demand-responsive services',
						text: 'Does the bus route provide a demand-responsive service? Passengers can directly book their journey on Zenbus!'
					},
					product4: {
						title: 'Live supervision',
						text: 'Supervision interfaces designed for use by transport operators for checking the status of the transport network in real time and assisting the decision-making process'
					},
					product5: {
						title: 'Retrospective supervision',
						text: 'Interfaces for retrospectively analysing and guaranteeing the performance of the transport service'
					}
				}
			},
			statistics: {
				tile:{
					title: 'Did you know?',
					text: 'Since its creation, Zenbus has collected vast quantities of mobility data. Here are some of the more surprising statistics!'
				},
				container: {
					km: 'miles travelled since launching Zenbus',
					stat1: 'prevented stomach ulcers',
					stat2: 'missed appointments',
					stat3: 'networks rolled out',
					stat4: 'bus stops reached'
				}
			},
			classic: {
				tile:{
					title: 'Write to us!',
					text:'We are available to answer all of your queries, whether you are looking for technical assistance, functional solutions or further information. We will even accept your declarations of undying love^^ '
				},
				form: {
					helloMyNameIs:'Hello, my name is',
					andIAm:'and I am ',
					option0:'curious',
					option1:'a traveller',
					option2:'a local authority',
					option3:'a transport operator',
					iAmWritingToYouBecause:'I am contacting you because ',
					canYouAnswerTo:'Please reply to ',
					rgpd:'By submitting this form, you agree to the information provided being used to satisfy your request.',
					submit:'Send',
					placeholders:{
						firstname:'King',
						lastname:'Arthur',
						message:'What is the airspeed velocity of an unladen swallow ?',
						email:'king.arthur@zenbus.fr'
					}
				}
			},
			footer: {
				social: {
					title:'Follow us'
				},
				subscribe: {
					title: 'Stay informed',
					text: 'By entering your email address, you agree to receive the latest news by email and accept our confidentiality policy.',
					link: 'Confidentiality policy',
					placeholder: 'Email'
				},
				contact: {
					title: 'Contact'
				},
				links: {
					title: 'ZENBUS',
					link1: 'Media',
					link2: 'Recruitment',
					link3: 'General Terms and Conditions of Use',
					link4: 'FAQ',
					link5: 'Zenbus Data ',
					link6: 'Legals'
				},
				copyrights: '© Zenbus 2018, all rights reserved'
			}
		},
		errors: {
			email: 'A valid email address is required.',
			rgpd: 'To submit the form, you must check the box above.'
		}
	},
	'es': {
		nav: {
			home: 'Página de inicio',
			collectivity: 'Colectividades',
			operators: 'Operadores',
			passenger: 'Viajeros',
			blog: 'Blog',
			team: 'Equipo',
			contact: 'Contacto'
		},
		homepage: {
			catchphrase: {
				appstore: {
					downloadIn: 'Descárgala en',
					appstore: 'l\'App Store'
				},
				playstore: {
					downloadIn: 'Disponible en',
					playstore: 'Play Store'
				},
				title: 'Transformar la movilidad',
				text: 'Zenbus es una solución sencilla para localizar transporte colectivo. A diario, ayudamos a las colectividades, a los operadores y a los viajeros, gracias a datos de calidad.'
			},
			map: {
				tile: {
					title: 'Zenbus cerca de casa',
					text: 'Zenbus cubre actualmente decenas de redes en Francia y cada mes nuevas líneas de autobuses se benefician del servicio. La aplicación comienza a utilizarse progresivamente en el extranjero.',
					button: 'Ver el mapa de redes'
				},
				mapexpand: {
					title: 'Mapa',
					text: 'Puedes filtrar el mapa por tipología de red',
					item: '',
					placeholder: 'Buscar una red',
					filterprefix: "Excepto",
					label: 'Ninguna red se corresponde con los tipos seleccionados | {count} des disponibles en',
					label2: ' | una ciudad | {count} ciudades',
					prive: 'Privado',
					iconAlt: 'Logotipo de la red',
					privateCode: {
						error:'¡Código incorrecto!',
						label: 'Código red privada',
						button: 'Validar',
						placeholder: 'Código red privada'
					},
					types: {
						1: "Urbano",
						2: "Interurbano",
						4: "Empresa",
						8: "Escolar",
						16: "Eventos",
						32: "Auditoría",
						64: "Estación de esquí",
						128: "Obras",
						256: "Claro"
					}
				}
				
			},
			vision: {
				tile: {
					title: 'Facilitar tu día a día',
					text: 'Gracias a sus eficientes algoritmos y a su plataforma Cloud, Zenbus crea y difunde datos útiles para todos los agentes del transporte colectivo.'
				},
				container: {
					collectivity: {
						title: 'Colectividad',
						item1: 'Seguimiento de la oferta',
						item2: 'Valoración de la red',
						item3: 'Integración simple'
					},
					operator: {
						title: 'Operador',
						item1: 'Seguimiento en tiempo real',
						item2: 'Reproducción completa',
						item3: 'Datos estadísticos'
					},
					passenger: {
						title: 'Viajero',
						item1: 'Visión en tiempo real',
						item2: 'Información instantánea',
						item3: 'Coordinación facilitada'
					},
					driver: {
						title: 'Conductor',
						item1: 'Turnos de trabajo simples',
						item2: 'Mejor página de inicio',
						item3: 'Coordinación facilitada'
					}
				}
			},
			products: {
				tile: {
					title: 'Interfaces adaptadas',
					text: 'Aplicación diferentes con ergonomía pensada para un uso eficaz y sin contratiempos.'
				},
				container: {
					product1: {
						title: 'Aplicación Conductor',
						text: 'Los conductores se conectan fácilmente a la aplicación Zenbus a través de su smartphone'
					},
					product2: {
						title: 'Aplicación Viajero',
						text: 'La aplicación, accesible a todos y gratuita, permite a los viajeros visualizar los autobuses de manera inédita.'
					},
					product3: {
						title: 'TAD',
						text: '¿La línea de autobús se activa bajo petición? ¡Los viajeros podrán reservar su trayecto directamente en Zenbus!'
					},
					product4: {
						title: 'Supervisión Live',
						text: 'Los operarios disponen de interfaces de supervisión que permiten controlar en tiempo real el estado de la red de transporte y facilitar la toma de decisiones.'
					},
					product5: {
						title: 'Supervisión a posteriori',
						text: 'Interfaces para analizar y garantizar a posteriori el buen funcionamiento de la oferta de transporte'
					}
				}
			},
			statistics: {
				tile:{
					title: '¿Lo sabías?',
					text: 'Desde su creación, Zenbus recoge numerosos datos de movilidad, aquí te mostramos algunas ilustraciones a veces sorprendentes!'
				},
				container: {
					km: 'kilómetros recorridos desde el lanzamiento de Zenbus',
					stat1: 'problemas evitados',
					stat2: 'citas perdidas',
					stat3: 'redes mostradas',
					stat4: 'paradas con servicio de transporte'
				}
			},
			classic: {
				tile:{
					title: '¡Escríbenos!',
					text:'Estamos aquí para responder a todos tus mensajes, ya sean técnicos, funcionales o informativos. Aceptamos también declaraciones apasionadas^^'
				},
				form: {
					helloMyNameIs:'Buenos días, me llamo',
					andIAm:'y soy',
					option0:'curioso',
					option1:'viajero',
					option2:'colectividad',
					option3:'operador',
					iAmWritingToYouBecause:'Os escribo porque',
					canYouAnswerTo:'Espero vuestra respuesta en la dirección',
					rgpd:'Al introducir tu dirección de email, aceptas recibir nuestras noticias y novedades por correo electrónico y tomas conocimiento de nuestra política de privacidad',
					submit:'Enviar',
					placeholders:{
						firstname:'Don',
						lastname:'Quijote',
						message:'Cómo estás',
						email:'don.quijote@zenbus.fr'
					}
				}
			},
			footer: {
				social: {
					title:'Síguenos'
				},
				subscribe: {
					title: 'Mantenerme informado',
					text: 'Al introducir tu dirección de email, aceptas recibir nuestras noticias y novedades por correo electrónico y tomas conocimiento de nuestra política de privacidad',
					link: 'Política de privacidad',
					placeholder: 'Email'
				},
				contact: {
					title: 'Contacto'
				},
				links: {
					title: 'ZENBUS',
					link1: 'Prensa',
					link2: 'Contratación',
					link3: 'CGU',
					link4: 'FAQ',
					link5: 'Datos Zenbus',
					link6: 'Legals'
				},
				copyrights: '© Zenbus 2018, todos los derechos reservados'
			}
		},
		errors: {
			email: 'Es necesario un email válido.',
			rgpd: 'Para enviar el formulario, debe marcar la casilla de arriba.'
		}
	},
	'en-US': this.en,
	'fr-FR': this.fr
};

const i18n = new VueI18n({
	locale: pickLanguage(), // set locale
	fallbackLocale: 'fr',
	messages 
});

function pickLanguage(){
	var userLanguage = (navigator.language || navigator.userLanguage) ,
	currentLanguage = null,
	DEFAULT_LOCALE = 'fr';

	for (var i = 0 ; i < navigator.languages.length ; i++){
		if(messages[navigator.languages[i]]){
			currentLanguage = navigator.languages[i];
			break;
		}
	}
	if (!currentLanguage){
		 // if nthing is found, take default language 
		 currentLanguage = DEFAULT_LOCALE ;
	}
	return currentLanguage ;
}